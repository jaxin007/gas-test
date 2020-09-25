import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
      {
        type: 'varchar',
        nullable: false,
        unique: true,
      },
    )
    email: string;

    @Column('double precision')
    threshold: number
}
