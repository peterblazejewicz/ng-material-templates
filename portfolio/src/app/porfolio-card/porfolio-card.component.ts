import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio/portfolio';

@Component({
  selector: 'app-porfolio-card',
  templateUrl: './porfolio-card.component.html',
  styleUrls: ['./porfolio-card.component.scss']
})
export class PorfolioCardComponent implements OnInit {


  @Input()
  portfolio: Portfolio;

  ngOnInit() {
  }

}
