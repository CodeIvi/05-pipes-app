import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe,
    PercentPipe,
    CurrencyPipe,
  ],
  templateUrl: './number-page.html',
})
export default class NumberPage {

  totalSells = signal(24_433_232.6657);
  percent = signal(0.4565)
}
