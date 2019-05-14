import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }
  initSources() {
    return this.http.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc');
  }

}
