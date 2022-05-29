import { Module } from '@nestjs/common';
import { Form1Service } from './form1.service';
import { Form1Controller } from './form1.controller';

@Module({
  controllers: [Form1Controller],
  providers: [Form1Service]
})
export class Form1Module {}
