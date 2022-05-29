import { Test, TestingModule } from '@nestjs/testing';
import { Form1Service } from './form1.service';

describe('Form1Service', () => {
  let service: Form1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Form1Service],
    }).compile();

    service = module.get<Form1Service>(Form1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
