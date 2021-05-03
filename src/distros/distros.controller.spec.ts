import { Test, TestingModule } from '@nestjs/testing';
import { DistrosController } from './distros.controller';

describe('DistrosController', () => {
  let controller: DistrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistrosController],
    }).compile();

    controller = module.get<DistrosController>(DistrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
