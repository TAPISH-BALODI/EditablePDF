import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { PdfModule } from './modules/pdf/pdf.module';


 
 


@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }), 
  DatabaseModule ,PdfModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 


 


 