/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InMemoryPortfolioService } from './in-memory-portfolio.service';

describe('Service: InMemoryPortfolio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryPortfolioService]
    });
  });

  it('should ...', inject([InMemoryPortfolioService], (service: InMemoryPortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
