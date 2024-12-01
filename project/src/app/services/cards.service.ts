import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from '../models/cards';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private baseurl = "https://sheetdb.io/api/v1/o2bansujgrq70";
  constructor(private http : HttpClient) {}

  public Insertion():Observable<Cards[]>{
     return this.http.get<Cards[]>(`${this.baseurl}`)  
  }
}
