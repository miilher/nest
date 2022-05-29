import * as mongoose from 'mongoose';

export const AnimalsSchema = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
});

export interface Animals {
    _id: string;
    name: string;
    category: string;

}