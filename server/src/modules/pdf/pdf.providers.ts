import { Pdf } from './pdf.entity';
import { PDF_REPOSITORY } from '../../core/constants';

export const PdfProviders = [{
    provide: PDF_REPOSITORY,
    useValue: Pdf,
}];