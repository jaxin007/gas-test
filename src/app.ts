import schedule from 'node-schedule';

import MailSender from './utils/mail.sender';
import TYPES from './services/types';

import { appPromise } from './index';
import { container } from './inversify.config';
import { envConfig } from './config';
import { CurrencyServiceInterface, UsersServiceInterface } from './interfaces';
import { Users } from './entity/Users';

appPromise().then(async (app) => {
  app.listen(envConfig.PORT, async () => {
    console.log(`server started on port ${envConfig.PORT}`);

    schedule.scheduleJob({ second: 0 }, async () => {
      const userService = container.get<UsersServiceInterface>(TYPES.UsersService);
      const currencyService = container.get<CurrencyServiceInterface>(TYPES.CurrencyService);
      const gasPrice = await currencyService.getGasPriceInUsd();

      const users = await userService
        .getUsersWhereThresholdIsLowerThanGasPrice(+gasPrice);

      users.forEach(async (user: Users) => MailSender.sendMail(user.email, user.threshold, gasPrice));
    });
  });
});
