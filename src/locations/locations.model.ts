import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

import { Room } from 'src/rooms/rooms.model';

interface LocationCreationAttrs {
  city: string;
  country: string;
}

@Table({ tableName: 'locations' })
export class Location extends Model<Location, LocationCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  country: string;

  @HasMany(() => Room)
  rooms: Room[];

  // locations pk
  // city
  // country
  // location -- one to many --> room
}
