import { Injectable } from '@angular/core';
import { data } from './rates';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  result;
  observer;
  constructor() {
    this.result = this.transformObjectToArray(data.rates);
    this.observer = new Observable(this.subscribe());
  }
  transformObjectToArray(obj) {
    const items = [];
    const keys = Object.keys(obj);
    for (const key of keys) {
      const value = obj[key];
      const item = {
        currency: key,
        value
      };
      items.push(item);
    }
    return items;
  }

  subscribe() {
    let i = 0;
    return (subscriber) => {
      const size = this.result.length;
      for (const item of this.result) {
        setTimeout(() => {
          subscriber.next(item);
        }, i * 500);

        i++;
      }
      setTimeout(() => {
        subscriber.complete();
      }, i * 500);
      i++;
    };

  }
}
