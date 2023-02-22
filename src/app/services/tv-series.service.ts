import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {

  private apiUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  searchSeries(query: string) {
    const url = `${this.apiUrl}/search/shows?q=${query}`;
    return this.http.get(url);
  }

  detaildInfo(id: number) {
    const url = `${this.apiUrl}/lookup/shows?thetvdb=${id}`;
    return this.http.get(url);
  }

  castInfo(id: number) {
    const url = `${this.apiUrl}/shows/${id}/cast`;
    return this.http.get(url);
  }

}

