import { Component, OnInit } from '@angular/core';
import { GithubApiService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reposotries: Array<any>;

  constructor(private reposapi: GithubApiService) {
  }

  ngOnInit() {

    this.loadRepos();

  }

  loadRepos() {

    this.reposapi.initSources().subscribe(
      data => {
        this.reposotries = data['items'];
        console.log(this.reposotries);

      }
    );

  }
}
