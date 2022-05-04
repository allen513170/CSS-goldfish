import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-cssn17',
  templateUrl: './cssn17.component.html',
  styleUrls: ['./cssn17.component.css']
})
export class Cssn17Component implements OnInit {

  myForm: any;

  constructor(
    public fb: FormBuilder,
    public service: HeroService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      password: ''
    })
    this.myForm.valueChanges.subscribe((e: any) => {
      console.log(e)
    })

  }

  onSubmit() {
    this.service.setId("123");
    console.log(this.service.getId())

    console.log(this.myForm.value);  // false
  }



}
