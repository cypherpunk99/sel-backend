import { Test, TestingModule } from '@nestjs/testing';
import { ReservedRoomsController } from './reserved-rooms.controller';

describe('ReservedRoomsController', () => {
  let controller: ReservedRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservedRoomsController],
    }).compile();

    controller = module.get<ReservedRoomsController>(ReservedRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
