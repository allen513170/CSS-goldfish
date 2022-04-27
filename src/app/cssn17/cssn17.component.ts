import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cssn17',
  templateUrl: './cssn17.component.html',
  styleUrls: ['./cssn17.component.css']
})
export class Cssn17Component implements OnInit {

  myForm:any;

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      password: ''
    })
    this.myForm.valueChanges.subscribe((e: any)=>{
      console.log(e)
    })

  }

  onSubmit() {
    console.log(this.myForm.value);  // false
  }



}
