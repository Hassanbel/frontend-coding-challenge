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
  today = new Date();

  constructor(private reposapi: GithubApiService) {
    console.log(this.today);
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
        this.reposotries = this.reposotries.concat(data['items']);

      }
    );
  }

  parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');

      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);

      return new Date(year, month, date);
    } else if((typeof value === 'string') && value === '') {
      return new Date();
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  dateDiffIndays (date1, date2) {

  return Math.floor((Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) - Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) ) /(1000 * 60 * 60 * 24));
  }

}
