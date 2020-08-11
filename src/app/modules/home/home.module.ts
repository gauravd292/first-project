import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeOffersComponent } from './home-offers/home-offers.component';
import { HomeTestimonialsComponent } from './home-testimonials/home-testimonials.component';
import { HomeTransparentComponent } from './home-transparent/home-transparent.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeSearchComponent,
    HomeOffersComponent,
    HomeTestimonialsComponent,
    HomeTransparentComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
