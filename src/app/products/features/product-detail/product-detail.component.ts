import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductsDetailStateService]
})
export default class ProductDetailComponent {

  productDetailState = inject(ProductsDetailStateService).state;
  id = input.required<string>();

  constructor () {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }


}
