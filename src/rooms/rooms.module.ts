import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { Room } from './rooms.model';
import { Location } from '../locations/locations.model';
import { LocationsService } from 'src/locations/locations.service';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService, LocationsService],
  imports: [SequelizeModule.forFeature([Room, Location])],
  exports: [RoomsService],
})
export class RoomsModule {}
