import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  ID = "";
  constructor() { }

  getId(){
    return this.ID;
  }

  setId(val:any){
    this.ID =val;
  }
}
