import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-prodduct',
  templateUrl: './create-prodduct.component.html',
  styleUrls: ['./create-prodduct.component.scss']
})



export class CreateProdductComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  form = new FormGroup({
    title: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(6)
    ])
  })

  submit(){
    console.log(this.form.value)
  }

}
