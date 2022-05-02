import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cssn13',
  templateUrl: './cssn13.component.html',
  styleUrls: ['./cssn13.component.css']
})
export class Cssn13Component implements OnInit {

  constructor() { }
  faCoffee = faCoffee;

  ngOnInit(): void {
  }

}
