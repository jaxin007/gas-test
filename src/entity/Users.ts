import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
      {
        type: 'char',
        nullable: false,
        unique: true,
      },
    )
    email: string;
}
