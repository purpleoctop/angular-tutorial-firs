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
  curr1;
  curr2;
  data;
  to;
  constructor(private httpClient: HttpClient) {
    this.data = data;
  }

  ngOnInit() {
    this.getRate(this.curr1, 'EUR');
  }


  getRate(currency1, currency2) {
      const url = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`;
      this.httpClient
        .get(url).subscribe(value => {
         console.log(value['rates'][currency2]);
        });
}
setCurrency1(curr) {
  this.curr1 = curr;
}
setCurrency2(curr) {
  this.curr2 = curr;
}


}
