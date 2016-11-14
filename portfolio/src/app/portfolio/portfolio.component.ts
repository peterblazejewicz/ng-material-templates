import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Portfolio } from './portfolio';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private portfolios: Portfolio[];
  private error: any;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService
      .getAll()
      .subscribe(
      portfolios => {
        this.portfolios = portfolios;
      },
      error => {
        this.error = error;
      }
      );
  }

}
