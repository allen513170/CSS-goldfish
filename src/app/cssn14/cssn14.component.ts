import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cssn14',
  templateUrl: './cssn14.component.html',
  styleUrls: ['./cssn14.component.css']
})
export class Cssn14Component implements OnInit {

  constructor() { }
  faCoffee = faCoffee;

  ngOnInit(): void {
  }

}
