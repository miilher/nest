import { PartialType } from '@nestjs/mapped-types';
import { CreateForm1Dto } from './create-form1.dto';

export class UpdateForm1Dto extends PartialType(CreateForm1Dto) {}
