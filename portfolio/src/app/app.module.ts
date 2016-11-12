import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'portfolio/example/:id', component: ExampleComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'portfolio' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
