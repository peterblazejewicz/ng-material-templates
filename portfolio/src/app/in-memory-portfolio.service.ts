import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryPortfolioService implements InMemoryDbService {

  createDb() {
    let portfolios = [];
    return { portfolios };
  }

}
