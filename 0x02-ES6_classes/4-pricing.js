import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this.amount;
  }

  set amount(newAmount) {
    this.amount = newAmount;
  }

  get currency() {
    return this.currency;
  }

  set currency(newCurrency) {
    this.currency = newCurrency;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}
