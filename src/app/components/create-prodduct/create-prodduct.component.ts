import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-prodduct',
  templateUrl: './create-prodduct.component.html',
  styleUrls: ['./create-prodduct.component.scss']
})



export class CreateProdductComponent implements OnInit{

  form = new FormGroup({
    title: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title(){
    return this.form.controls.title as FormControl
  }

  constructor(private productService: ProductsService,
              private modalService: ModalService){}

  ngOnInit(): void {

  }

  submit(){
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
  }).subscribe(()=> {
    this.modalService.close()
  })
  }


}
