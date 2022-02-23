import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      models: [],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// data model

// locations pk
// city
// country

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
