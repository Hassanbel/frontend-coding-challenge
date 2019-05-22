import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  today = new Date();

  constructor(private http: HttpClient) {
     this.today.setDate(this.today.getDate() - 30);

  }

  initSources() {
      const current = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + this.today.getDate();

    return this.http.get('https://api.github.com/search/repositories?q=created:>' + current + '&sort=stars&order=desc&page=1');
  }

  paginationSources(page: number) {
      const current = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + this.today.getDate();

    return this.http.get('https://api.github.com/search/repositories?q=created:>' + current + '&sort=stars&order=desc&page=' + page);
  }

}
