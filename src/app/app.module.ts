import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CollectionsModule } from './collections/collections.module';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
//import { ElementsModule } from './elements/elements.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BiographyComponent } from './components/biography/biography.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    //ElementsModule,
    //CollectionsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
