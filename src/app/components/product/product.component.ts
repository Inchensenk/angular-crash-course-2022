import { Component, Input } from "@angular/core";
import { IProduct } from "src/app/models/product";

//Навешиваем декоратор на класс ProductComponent
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  @Input() product: IProduct

  details = false
}
