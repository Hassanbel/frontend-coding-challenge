import { Component } from '@angular/core';
import { GithubApiService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reposotries: Array<any>;

  title = 'starred-repos';

  constructor(private reposapi: GithubApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {

    // load news sources
    this.reposapi.initSources().subscribe(data => this.reposotries = data['sources']);
  }

}
