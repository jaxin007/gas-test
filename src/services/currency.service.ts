import axios from 'axios';
import { injectable } from 'inversify';
import Decimal from 'decimal.js';

import { CurrencyServiceInterface } from '../interfaces';
import { envConfig } from '../config';

@injectable()
export class CurrencyService implements CurrencyServiceInterface {
  async getEthereumValueInUsd(): Promise<Decimal> {
    const response = await axios.get(envConfig.COIGNECKO_URL);

    return new Decimal(response.data[1].current_price);
  }

  async calculateGweiValueInEth(): Promise<Decimal> {
    const ethereumInUsd = await this.getEthereumValueInUsd();

    return ethereumInUsd.div(1000000000);
  }

  async getGasPriceInGwei(): Promise<Decimal> {
    const response = await axios.get(envConfig.ETHGASSTATION_URL);

    return new Decimal(response.data.market_data.current_price.usd).div(10);
  }

  async getGasPriceInUsd(): Promise<Decimal> {
    const gweiValueInUsd = await this.calculateGweiValueInEth();

    const gasPriceInGwei = await this.getGasPriceInGwei();

    const gasValueInUsd = gweiValueInUsd.mul(gasPriceInGwei);

    return gasValueInUsd;
  }
}
