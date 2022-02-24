import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/rooms.model';
import { LocationsController } from './locations/locations.controller';
import { LocationsModule } from './locations/locations.module';
import { Location } from './locations/locations.model';
import { RoomTypesService } from './room-types/room-types.service';
import { RoomTypesController } from './room-types/room-types.controller';
import { RoomTypesModule } from './room-types/room-types.module';
import { ReservedRoomsService } from './reserved-rooms/reserved-rooms.service';
import { ReservedRoomsController } from './reserved-rooms/reserved-rooms.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Room, Location],
      autoLoadModels: true,
    }),
    RoomsModule,
    LocationsModule,
    RoomTypesModule,
  ],
  controllers: [
    AppController,
    LocationsController,
    RoomTypesController,
    ReservedRoomsController,
  ],
  providers: [AppService, RoomTypesService, ReservedRoomsService],
})
export class AppModule {}

// data model

// locations pk +
// city
// country
// location -- one to many --> room

// room_id pk +
// number
// room_type fk
// location fk

// room_types +
// id pk
// cost
// name
// max_capacity

// reserved_rooms +

// reservations +
// _id
// date_in, date_out, status (confirmed)

// occupied_rooms +
// check_in
// check_out
// room_id fk
// reservation_id fk
