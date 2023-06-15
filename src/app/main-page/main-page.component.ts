import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  movieList = [
    {
      movieImage: "~../../assets/images/lmAsylum.jpg",
      movieTitle: "The Asylum Little Mermaid",
      movieDescription: "https://www.imdb.com/title/tt27834173/?ref_=fn_al_tt_4"
    },
    
  ]
  totalTasks = 0;

  top10Best: any = [];
  top10Worse: any = [];

  selectedPage = 'home';
  constructor() {
    this.totalTasks = this.movieList.length;
    for (let i = 9; i >= 0; i--) {
      this.top10Best.push(this.movieList[i])
    }
    for (let i = this.movieList.length - 10; i < this.movieList.length; i++) {

      this.top10Worse.push(this.movieList[i])
    }

  }

  ngOnInit(): void {
  }

  changePage(pageName: string) {
    this.selectedPage = pageName
  }

}
