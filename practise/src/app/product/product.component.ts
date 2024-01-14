import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productObj: Product = new Product();

  @Input()
  productCount!: number;

  @Output()
  sendProductData: EventEmitter<any> = new EventEmitter();

  add() {
    this.sendProductData.emit(this.productObj);
    console.log("product-data", this.productObj);

  }

  reset() {
    this.productObj = new Product();
  }

}

export class Product {
  productName!: string;
  price!: number;
  quantity!: number;
}









