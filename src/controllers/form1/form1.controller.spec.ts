import { Test, TestingModule } from '@nestjs/testing';
import { Form1Controller } from './form1.controller';
import { Form1Service } from './form1.service';

describe('Form1Controller', () => {
  let controller: Form1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Form1Controller],
      providers: [Form1Service],
    }).compile();

    controller = module.get<Form1Controller>(Form1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
