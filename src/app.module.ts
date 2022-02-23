import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/rooms.model';
import { LocationsService } from './locations/locations.service';
import { LocationsController } from './locations/locations.controller';
import { LocationsModule } from './locations/locations.module';
import { Location } from './locations/locations.model';
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
  ],
  controllers: [AppController, LocationsController],
  providers: [AppService],
})
export class AppModule {}

// data model

// locations pk
// city
// country
// location -- one to many --> room

// room_id pk
// number
// room_type fk
// location fk

// room_type
// id pk
// cost
// name
// max_capacity

// reservation_id
// date_in, date_out, status (confirmed)

// occupied_room
// check_in
// check_out
// room_id fk
// reservation_id fk
