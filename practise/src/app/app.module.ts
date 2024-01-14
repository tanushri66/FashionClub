import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { BeautyComponent } from './beauty/beauty.component';
import { SkincareComponent } from './skincare/skincare.component';
import { HaircareComponent } from './haircare/haircare.component';
import { BodycareComponent } from './bodycare/bodycare.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
//import { FormsModule} from '@angular/forms';
//import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
//import { ProductComponent } from './product/product.component';
//import { BookingListComponent } from './booking-list/booking-list.component';
//import { SearchPipe } from './search.pipe';
//import { ProductListComponent } from './product-list/product-list.component';
//import { ReactiveFormsModule } from '@angular/forms';
//import { FormbuilderFormComponent } from './formbuilder-form/formbuilder-form.component';
//import { TemplateFormComponent } from './template-form/template-form.component';
//import { MypipePipe } from './mypipe.pipe';
//import { EmployeeComponent } from './employee/employee.component';
//import { TableComponent } from './table/table.component';
//import { SearchComponent } from './search/search.component';
//import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    BeautyComponent,
    SkincareComponent,
    HaircareComponent,
    BodycareComponent,
    HotelListComponent,
    HotelDetailsComponent,
    //ReactiveFormComponent,
    //FormbuilderFormComponent,
    //TemplateFormComponent,
    //MypipePipe,
    //EmployeeComponent,
    //TableComponent,
    //SearchComponent,
    //MainComponent,
    //ProductComponent,
   //BookingListComponent,
   //SearchPipe,
   //ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    //ReactiveFormsModule
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
