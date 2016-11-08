import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MdlDirective } from './mdl.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MdlDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'inbox', component: HomeComponent },
      { path: 'trash', component: HomeComponent },
      { path: 'spam', component: HomeComponent },
      { path: 'forums', component: HomeComponent },
      { path: 'updates', component: HomeComponent },
      { path: 'promos', component: HomeComponent },
      { path: 'purchases', component: HomeComponent },
      { path: 'social', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
