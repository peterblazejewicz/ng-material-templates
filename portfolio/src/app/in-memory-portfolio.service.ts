import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryPortfolioService implements InMemoryDbService {

  createDb() {
    let portfolios = [
      {
        id: '01',
        image: 'images/example-work01.jpg',
        title: 'Blog template',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      },
      {
        id: '07',
        image: 'images/example-work07.jpg',
        title: 'Sunt nulla',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      },
      {
        id: '02',
        image: 'images/example-work02.jpg',
        title: 'Android.com website',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      },
      {
        id: '03',
        image: 'images/example-work03.jpg',
        title: 'Dashboard template',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      },
      {
        id: '04',
        image: 'images/example-work04.jpg',
        title: 'Text-heavy website',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      },
      {
        id: '08',
        image: 'images/example-work08.jpg',
        title: 'Ex officia laborum',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      },
      {
        id: '05',
        image: 'images/example-work05.jpg',
        title: 'Stand-alone article',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      },
      {
        id: '06',
        image: 'images/example-work06.jpg',
        title: 'MDL website',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      },
      {
        id: '09',
        image: 'images/example-work09.jpg',
        title: 'Consequat ut quis',
        text: 'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
      }
    ];
    return { portfolios };
  }

}
