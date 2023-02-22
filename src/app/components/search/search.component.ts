import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TvSeriesService } from '../../services/tv-series.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: any[] = [];
  public myForm!: FormGroup

  constructor(
    private tvSeriesService: TvSeriesService,
    private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(''),
    });
  }

  searchSeries() {
    console.log(this.myForm.value);
    this.tvSeriesService.searchSeries(this.myForm.value.name).subscribe((response: any) => {
      this.results = response;
      console.log(this.results);
      this.router?.navigate(["/results"], { queryParams: { search: this.myForm.value.name } });
    });
  }

}
