import { Injectable } from '@nestjs/common';
import { CreateForm1Dto } from './dto/create-form1.dto';
import { UpdateForm1Dto } from './dto/update-form1.dto';

@Injectable()
export class Form1Service {
  create(createForm1Dto: CreateForm1Dto) {
    return 'This action adds a new form1';
  }

  findAll() {
    return `This action returns all form1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} form1`;
  }

  update(id: number, updateForm1Dto: UpdateForm1Dto) {
    return `This action updates a #${id} form1`;
  }

  remove(id: number) {
    return `This action removes a #${id} form1`;
  }
}
