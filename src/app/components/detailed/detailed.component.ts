import { Component, OnInit } from '@angular/core';
import { TvSeriesService } from '../../services/tv-series.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {

  thetvdb!: number;
  id!: number;
  details: any;
  casts: any[] = [];
  summary: string = "";
  genres: string = "";
  rating: number = 0.0;

  constructor(
    private tvSeriesService: TvSeriesService,
    private route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
    console.log("ngoninit");
    this.route.queryParams.subscribe(params => {
      this.thetvdb = params['thetvdb'];
      this.id = params["id"];
      this.detailsTVseries(this.thetvdb);
      this.getCasts(this.id);
    });
  }

  detailsTVseries(id: number) {
    this.tvSeriesService.detaildInfo(id).subscribe((response: any) => {
      this.details = response;
      this.summary = this.details?.summary.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
      this.genres = this.details?.genres.join(" | ");
      this.rating = this.details?.rating?.average;
    });
  }

  getCasts(id: number){
    this.tvSeriesService.castInfo(id).subscribe((response: any) => {
      this.casts = response;
      console.log(response);
    });
  }

  goBack(){
    this._location.back();
  }

  trackByFn(){}
}
