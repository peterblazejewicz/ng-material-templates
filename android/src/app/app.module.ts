import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AndroidMdlDirective } from './mdl.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AndroidMdlDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent  },
      { path: 'home', redirectTo: '/' },
      { path: 'phones', component: HomeComponent },
      { path: 'tables', component: HomeComponent },
      { path: 'wear', component: HomeComponent },
      { path: 'tv', component: HomeComponent },
      { path: 'auto', component: HomeComponent },
      { path: 'one', component: HomeComponent },
      { path: 'play', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
