import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Form1Module } from './controllers/form1/form1.module';

@Module({
  imports: [Form1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
