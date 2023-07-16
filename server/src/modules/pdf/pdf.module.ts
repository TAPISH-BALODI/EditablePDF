import { Module } from '@nestjs/common';
import {PdfController} from './pdf.controller'
import { PdfService } from './pdf.service';
import {PdfProviders} from './pdf.providers'
import {DatabaseModule} from '../../core/database/database.module'
 
@Module({
  imports:[DatabaseModule],
  controllers: [PdfController],
  providers: [PdfService,...PdfProviders],
   
})
export class PdfModule {}