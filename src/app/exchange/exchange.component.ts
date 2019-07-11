import { Component, OnInit } from '@angular/core';
import { data } from '../currencies';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currencies = {
    curr1: {rate: 0, symbol: "USD"},
    curr2: {rate: 0, symbol: "ISK"}
  };
  data;
  to;
  constructor(private httpClient: HttpClient) {
    this.data = data;
  }

  ngOnInit() {
  }


  getRate(currency) {
    const currency2Symbol = currency === this.currencies.curr1 ? this.currencies.curr2 : this.currencies.curr1;
    const url = `https://api.exchangeratesapi.io/latest?base=${currency.symbol}&symbols=${currency2Symbol.symbol}`;
    this.httpClient
      .get(url)
      .subscribe(value => {
        const currency2Key = Object.keys(this.currencies).find(k => this.currencies[k].symbol === currency2Symbol.symbol);
        console.log(currency, value );
        this.currencies[currency2Key].rate = value['rates'][currency2Symbol.symbol] * currency.rate;
      });
  }

  setRate1(rate) {
    this.currencies.curr1.rate = rate;
    this.getRate(this.currencies.curr1);
  }
  setRate2(rate) {
    this.currencies.curr2.rate = rate;
    this.getRate(this.currencies.curr2);
  }
  setSymbol1(symbol) {
    this.currencies.curr1.symbol = symbol;
    this.getRate(this.currencies.curr1);
  }
  setSymbol2(symbol) {
    this.currencies.curr2.symbol = symbol;
    this.getRate(this.currencies.curr2);
  }


}
