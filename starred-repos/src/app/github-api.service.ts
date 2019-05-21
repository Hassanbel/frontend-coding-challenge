import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  today = new Date();

  constructor(private http: HttpClient) {
  }

  initSources() {
    console.log(this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + this.today.getDate());
    this.today.setDate(this.today.getDate() - 30);

    const current = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + this.today.getDate();
    console.log(current);

    return this.http.get('https://api.github.com/search/repositories?q=created:>' + current + '&sort=stars&order=desc&page=1');
  }

  paginationSources(page: number) {
    return this.http.get('https://api.github.com/search/repositories?q=created:>2019-05-14&sort=stars&order=desc&page=' + page);
  }

}
