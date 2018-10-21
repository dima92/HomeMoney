import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent {
  @Input() currency: Array<any>;
 // currencies: any[] = this.currency;
}
