import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsController } from './animals.controller';
import { AnimalsSchema } from './animals.model';
import { AnimalsService } from './animals.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nestjs-base-test:nestjs-base-test@cluster0.grynaap.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([ {
      name: 'Animals', schema: AnimalsSchema, collection: 'pets'
    }]),
  ],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
