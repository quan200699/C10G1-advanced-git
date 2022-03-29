import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findProductById(this.id);
    });
  }

  ngOnInit() {
  }

  findProductById(id) {
    this.productService.findProductById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      })
    });
  }

  editProduct(id: number) {
    this.productService.editProduct(this.productForm.value, id).subscribe(() => {
      alert('Cập nhật thành công');
    }, () => alert('Xảy ra lỗi'));
  }
}
