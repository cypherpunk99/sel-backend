import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Location } from 'src/locations/locations.model';

@Table({ tableName: 'rooms' })
export class Room extends Model<Room> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  num: number;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
  })
  locationId: number;

  // room_id pk
  // number
  // room_type fk
  // location fk
}
