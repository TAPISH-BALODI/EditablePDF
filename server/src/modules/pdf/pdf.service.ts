import { Injectable,Inject } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Pdf } from './pdf.entity';

import { PDF_REPOSITORY } from '../../core/constants';

@Injectable()
export class PdfService {

    constructor(@Inject(PDF_REPOSITORY) private readonly pdfRepository: typeof Pdf) { }

    async update(id, data, ) {
        const [numberOfAffectedRows, [updatedPost]] = await this.pdfRepository.update({ ...data }, { where: { id }, returning: true });

    return { numberOfAffectedRows, updatedPost };
  
    }
   
    async findOneByName(name: string): Promise<Pdf> {
        const response= await this.pdfRepository.findOne<Pdf>({ where: { name } });
        return response
    }
    async create(input): Promise<Pdf> {
         

        
        return await this.pdfRepository.create<Pdf>(input);
    }
}