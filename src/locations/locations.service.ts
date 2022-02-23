import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLocationDto } from './dto/create-location.dto';
import { Location } from './locations.model';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location)
    private locRepo: typeof Location,
  ) {}

  async createLocation(dto: CreateLocationDto) {
    const location = await this.locRepo.create(dto);
    return location;
  }

  async getLocations() {
    const locations = await this.locRepo.findAll();
    return locations;
  }
}
