import { Container } from 'inversify';

import TYPES from './services/types';
import { UsersService, CurrencyService } from './services';
import { UsersServiceInterface, CurrencyServiceInterface } from './interfaces';

export const container = new Container();

container.bind<UsersServiceInterface>(TYPES.UsersService).to(UsersService);
container.bind<CurrencyServiceInterface>(TYPES.CurrencyService).to(CurrencyService);
