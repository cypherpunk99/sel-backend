import { Test, TestingModule } from '@nestjs/testing';
import { RoomTypesController } from './room-types.controller';

describe('RoomTypesController', () => {
  let controller: RoomTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomTypesController],
    }).compile();

    controller = module.get<RoomTypesController>(RoomTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
