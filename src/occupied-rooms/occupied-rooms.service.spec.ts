import { Test, TestingModule } from '@nestjs/testing';
import { OccupiedRoomsService } from './occupied-rooms.service';

describe('OccupiedRoomsService', () => {
  let service: OccupiedRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OccupiedRoomsService],
    }).compile();

    service = module.get<OccupiedRoomsService>(OccupiedRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
