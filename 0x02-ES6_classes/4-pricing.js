export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this.amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this.currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
