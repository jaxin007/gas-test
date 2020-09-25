import { User } from '../models';
import { Users } from '../entity/Users';

export interface UsersServiceInterface {
  registerUser(userData: User): Promise<Users>;
  getAllUsers(): Promise<Users[]>;
}
