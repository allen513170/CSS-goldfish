import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-cssn10',
  templateUrl: './cssn10.component.html',
  styleUrls: ['./cssn10.component.css'],

})
export class Cssn10Component implements OnInit {

  constructor(public service:HeroService) { }

  ngOnInit(): void {
    console.log(this.service.getId())
  }

}
