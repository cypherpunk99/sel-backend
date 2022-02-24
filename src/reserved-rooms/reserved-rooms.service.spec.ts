import { Test, TestingModule } from '@nestjs/testing';
import { ReservedRoomsService } from './reserved-rooms.service';

describe('ReservedRoomsService', () => {
  let service: ReservedRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservedRoomsService],
    }).compile();

    service = module.get<ReservedRoomsService>(ReservedRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
