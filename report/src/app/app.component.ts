import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'rprt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'rprt works!';

     ngAfterViewInit(): void {
        componentHandler.upgradeAllRegistered();
    }
}
