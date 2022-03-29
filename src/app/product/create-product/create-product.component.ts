import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  //Form trong Angular: trong Angular có 2 loại Form: Template Driven Form
  //Reactive Form
  // TemplateDrivenForm: ngModel
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  createProduct() {
    this.productService.createProduct(this.productForm.value).subscribe(() => {
      alert('Tạo thành công!');
    }, () => {
      alert('Xảy ra lỗi!!')
    });
  }

}
