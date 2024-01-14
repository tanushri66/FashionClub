import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { BeautyComponent } from './beauty/beauty.component';
import { SkincareComponent } from './skincare/skincare.component';
import { HaircareComponent } from './haircare/haircare.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    BeautyComponent,
    SkincareComponent,
    HaircareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
