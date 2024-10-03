import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }
    set amount(Amount) {
        this._amount = Amount;
    }

    get currency() {
        return this._currency;
    }
    set currency(Ncurrency) {
        this._currency = Ncurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}