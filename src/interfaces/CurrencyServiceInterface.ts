import Decimal from 'decimal.js';

export interface CurrencyServiceInterface {
  getEthereumValueInUsd(coigneckoUrl: string): Promise<Decimal>,
  calculateGweiValueInEth(): Promise<Decimal>,
  getGasPriceInGwei(gasStationUrl: string, gasStationApiKey: string): Promise<Decimal>,
  getGasPriceInUsd(): Promise<Decimal>,
}
