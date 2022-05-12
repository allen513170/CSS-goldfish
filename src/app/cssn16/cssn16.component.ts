import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cssn16',
  templateUrl: './cssn16.component.html',
  styleUrls: ['./cssn16.component.css']
})
export class Cssn16Component implements OnInit {

  constructor() { }
  faCoffee = faCoffee;

  ngOnInit(): void {
  }

}
