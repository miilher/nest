/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model , ObjectId} from 'mongoose';
import { Animals } from './animals.model';

@Injectable()
export class AnimalsService {

    constructor(
        @InjectModel('Animals') private readonly animalsModel: Model<Animals>) {}

    async create(doc: Animals) {
        const result = await new this.animalsModel(doc).save();
        return result._id;
    }

    async findAll(){
        console.log('all')
        return await this.animalsModel.find()
    }

    async findById(id){
        console.log(id)
        const query: any = { _id: new mongoose.Types.ObjectId(id) }
        return await this.animalsModel.find(query).exec()
        // ...
    }

    async update(animals: Animals) {
        // ...
        console.log(animals)
    }

    async remove(animals: Animals) {
        // ...
        console.log(animals)
    }
}
