import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Portfolio } from './portfolio/portfolio';

@Injectable()
export class PortfolioService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private portfoliosUrl = 'app/portfolios';

  constructor(private http: Http) { }

  getAll(): Observable<Portfolio[]> {
    return this.http
      .get(this.portfoliosUrl, new RequestOptions({ headers: this.headers }))
      .map((r: Response) => {
        return r.json().data as Portfolio[];
      });
  }

}
