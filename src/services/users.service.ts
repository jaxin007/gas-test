import Decimal from 'decimal.js';
import {
  getConnection, LessThan, MoreThan, Repository,
} from 'typeorm';
import { injectable } from 'inversify';

import { UsersServiceInterface } from '../interfaces';
import { User } from '../models';
import { Users } from '../entity/Users';

@injectable()
export class UsersService implements UsersServiceInterface {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getConnection().getRepository<Users>('users');
  }

  async registerUser(userData: User): Promise<Users> {
    return this.repository.save(userData);
  }

  async getAllUsers(): Promise<Users[]> {
    return this.repository.find();
  }

  getUsersWhereThresholdIsLowerThanGasPrice(gasPrice: number): Promise<Users[]> {
    return this.repository
      .find(
        {
          threshold: LessThan(gasPrice),
        },
      );
  }
}
