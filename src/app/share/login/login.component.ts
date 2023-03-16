import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  myForm: any;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      password: ''
    })
    this.myForm.valueChanges.subscribe((e: any) => {
      console.log(e)
    })
  }

  onSubmit(){
    console.log("sucess");
    this.router.navigate(['/main'])

  }

  toMain(){

  }
}
