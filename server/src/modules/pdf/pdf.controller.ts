import { Controller, Get ,Body,Post} from '@nestjs/common';
import {PdfDto} from './DTO/pdf.dto';
import {InputDto} from './DTO/input.dto';
import { PDFDocument, } from 'pdf-lib';

import { PdfService } from './pdf.service';
import * as fs from 'fs'
@Controller()
export class PdfController {
  constructor(private readonly pdfService: PdfService,) {}

  @Get('loadPdf')
  async loadPdf( ) {
     
    const response= await this.pdfService.findOneByName('example');
    const binaryString = atob(response.file);
     const uint8Array = new Uint8Array(binaryString.length);
     for (let i = 0; i < binaryString.length; i++) {
       uint8Array[i] = binaryString.charCodeAt(i);
     }
    
    const pdfDoc = await PDFDocument.load(uint8Array);
    
     return {pdfDoc:pdfDoc,binaryString:binaryString}
  }
  @Post('savePdf')
  savePdf(@Body() input:PdfDto) {
    return this.pdfService.update(input,{where:input.name});
  }
  @Post('createPdf')
  createPdf(@Body() input:PdfDto) {
    return this.pdfService.create(input);
  }


  
}
