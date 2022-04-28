import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cssn11',
  templateUrl: './cssn11.component.html',
  styleUrls: ['./cssn11.component.css']
})
export class Cssn11Component implements OnInit {

  constructor() { }
  faCoffee = faCoffee;

  ngOnInit(): void {
  }

}
