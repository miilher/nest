/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnimalsDocument = Animals & Document;

@Schema()
export class Animals {
    @Prop()
    name: string;

    @Prop()
    category: string;

}

export const CatSchema = SchemaFactory.createForClass(Animals);


