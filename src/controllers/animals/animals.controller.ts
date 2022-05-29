import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnimalsService } from './animals.service';
import { Animals } from './animals.model';

@ApiTags('animals')
@Controller('animals')
export class AnimalsController {

  constructor(private service: AnimalsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('findById/:id')
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post('create')
  create(@Body() animals: Animals) {
    return this.service.create(animals);
  }

  @Put('update')
  update(@Body() animals: Animals) {
    return this.service.update(animals);
  }

  @Delete('delete/:id')
  remove(@Param() params) {
    return this.service.remove(params.id);
  }
}