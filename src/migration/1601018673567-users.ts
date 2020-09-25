import {
  MigrationInterface,
  QueryRunner,
  Table,
} from 'typeorm';

export class users1601018673567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'email',
          type: 'char',
          isNullable: false,
          isUnique: true,
        },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('users', true);
  }
}
