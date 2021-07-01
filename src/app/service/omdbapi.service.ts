import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {

  constructor(private http: HttpClient) { }

  getMoviesList(search:string) {
    return this.http.get('http://www.omdbapi.com/?apikey=98798435&s='+search);
  }
}
