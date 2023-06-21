import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  submit(){
    console.log(this.title)
    console.log(this.form.value)
  }

  ngOnInit(): void {

  }
}
