import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_layouts/header/header.component';
import { FooterComponent } from './_layouts/footer/footer.component';
import { NavigationComponent } from './_layouts/header/navigation/navigation.component';
import { MobileNavigationComponent } from './_layouts/header/mobile-navigation/mobile-navigation.component';

import { HomeModule } from './modules/home/home.module';
import { PageNotFoundComponent } from './_layouts/page-not-found/page-not-found.component';
import { HomeLayoutComponent } from './_layouts/home-layout/home-layout.component';
import { PnfHeaderComponent } from './_layouts/page-not-found/pnf-header/pnf-header.component';
import { PnfFooterComponent } from './_layouts/page-not-found/pnf-footer/pnf-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MobileNavigationComponent,
    PageNotFoundComponent,
    HomeLayoutComponent,
    PnfHeaderComponent,
    PnfFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
