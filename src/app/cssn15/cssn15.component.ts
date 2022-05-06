import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cssn15',
  templateUrl: './cssn15.component.html',
  styleUrls: ['./cssn15.component.css']
})
export class Cssn15Component implements OnInit {

  constructor() { }
  faCoffee = faCoffee;

  ngOnInit(): void {
  }

}
