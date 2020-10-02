import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  url:string = 'https://api.jikan.moe/v3/search/anime?q=naruto';
  constructor(private http:HttpClient) { }
  
  getData(){
    return this.http.get(this.url);
  }
    
}
