import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Form1Service } from './form1.service';
import { CreateForm1Dto } from './dto/create-form1.dto';
import { UpdateForm1Dto } from './dto/update-form1.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('form1')

@Controller('form1')
export class Form1Controller {
  constructor(private readonly form1Service: Form1Service) {}

  @Post()
  create(@Body() createForm1Dto: CreateForm1Dto) {
    return this.form1Service.create(createForm1Dto);
  }

  @Get()
  findAll() {
    return this.form1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.form1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateForm1Dto: UpdateForm1Dto) {
    return this.form1Service.update(+id, updateForm1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.form1Service.remove(+id);
  }
}
