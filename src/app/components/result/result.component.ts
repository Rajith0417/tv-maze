import { Component, OnInit } from '@angular/core';
import { TvSeriesService } from '../../services/tv-series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  results: any[] = [];
  name!: string;
  currentRating = 4;

  constructor(
    private tvSeriesService: TvSeriesService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("ngoninit");
    this.route.queryParams.subscribe(params => {
      this.name = params['search'];
      this.searchTVseries(this.name);
    });
  }

  searchTVseries(query: string) {
    console.log("search function");
    this.tvSeriesService.searchSeries(query).subscribe((response: any) => {
      this.results = response;
      console.log(this.results);
    });
  }

  trackByFn(){

  }
}
