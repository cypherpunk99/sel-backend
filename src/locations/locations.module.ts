import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Room } from 'src/rooms/rooms.model';
import { Location } from 'src/locations/locations.model';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService],
  imports: [SequelizeModule.forFeature([Location, Room])],
  exports: [LocationsService],
})
export class LocationsModule {}
