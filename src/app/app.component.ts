import { Component, OnInit } from '@angular/core';
import { OmdbapiService } from "./service/omdbapi.service";
import { MovieDetail } from "./class/omdb-class";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'javascript-test';
  search:string;
  lst_movies;
  constructor(public _omdbService:OmdbapiService){
    this.search='';
    this.lst_movies=new MovieDetail;
  }
  ngOnInit(){
    // this.getService();
  }
  openUrl(imdb_id:string){
    var url='https://www.imdb.com/title/'+imdb_id;
    window.open(url);
  }
  getService(){
    this._omdbService.getMoviesList(this.search).subscribe(data=>{
      debugger;
      this.lst_movies=data;
      this.lst_movies.Search=this.lst_movies.Search.slice(0,3);
    });
  }
}
