import { Test, TestingModule } from '@nestjs/testing';
import { OccupiedRoomsController } from './occupied-rooms.controller';

describe('OccupiedRoomsController', () => {
  let controller: OccupiedRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OccupiedRoomsController],
    }).compile();

    controller = module.get<OccupiedRoomsController>(OccupiedRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
