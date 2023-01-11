import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

 text1: string ='ErickRV';
 color1: string ='blue';

  myForm: FormGroup = this.fb.group({
    name: ['',Validators.required]
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeName(){
    this.text1=Math.random().toString();;
  }

  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color1= color;
  }

  error(value: string): boolean{
    return this.myForm.get(value)?.invalid || false;
  }



}
