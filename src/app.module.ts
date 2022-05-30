import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Form1Module } from './controllers/form1/form1.module';
import { AnimalsModule } from './controllers/animals/animals.module';

@Module({
  imports: [
    Form1Module,
    AnimalsModule,
    MongooseModule.forRoot(
      'mongodb+srv://nestjs-base-test:nestjs-base-test@cluster0.grynaap.mongodb.net/?retryWrites=true&w=majority',
    ),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
