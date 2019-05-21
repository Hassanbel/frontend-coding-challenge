import { Component, OnInit } from '@angular/core';
import { GithubApiService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reposotries: Array<any>;
  page = 2;

  constructor(private reposapi: GithubApiService) {
  }

  ngOnInit() {
    this.loadRepos();
  }

  loadRepos() {

    this.reposapi.initSources().subscribe(
      data => {
        this.reposotries = data['items'];
      }
    );

  }

  // When scroll down the screen
  onScroll() {
    console.log('Scrolled');
    this.page = this.page + 1;
    this.reposapi.paginationSources(this.page).subscribe(
      data => {
        this.reposotries.push(data['items']);
        console.log(this.reposotries);
      }
    );
  }

}
