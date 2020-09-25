import { Container } from 'inversify';

import TYPES from './services/types';
import { UsersService } from './services';
import { UsersServiceInterface } from './interfaces';

const container = new Container();

container.bind<UsersServiceInterface>(TYPES.UsersService).to(UsersService);

export default container;
