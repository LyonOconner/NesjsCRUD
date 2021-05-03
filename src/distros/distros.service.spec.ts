import { Test, TestingModule } from '@nestjs/testing';
import { DistrosService } from './distros.service';

describe('DistrosService', () => {
  let service: DistrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistrosService],
    }).compile();

    service = module.get<DistrosService>(DistrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
