import { Component } from "@angular/core";
import { Cards } from "../models/cards";
import { CardsService } from "../services/cards.service";

@Component({
  selector:"app-cards",
  templateUrl:"./cards.component.html",
  styleUrls:["./cards.component.css"],
})
export class CardsComponent{
  cards : Cards[] = [];
  constructor(private service : CardsService){}
  ngOnInit():void{
    this.service.Insertion().subscribe(data => this.cards=data)
  }

}