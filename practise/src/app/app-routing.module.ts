import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { BeautyComponent } from './beauty/beauty.component';
import { SkincareComponent } from './skincare/skincare.component';
import { HaircareComponent } from './haircare/haircare.component';
import { BodycareComponent } from './bodycare/bodycare.component';
import { authGuard } from './auth.guard';
//import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [
  {
    path: 'men', component: MenComponent, canActivate: [authGuard]
  },
  {
    path: 'women', component: WomenComponent
  },
  {
    path: 'kids', component: KidsComponent
  },
  {
    path: 'beauty', component: BeautyComponent, children: [
      {
        path: 'skincare', component: SkincareComponent
      },
      {
        path: 'haircare', component: HaircareComponent
      },
      { path: 'bodycare', component: BodycareComponent }
    ]
  },
  { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },
  { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
  { path: 'buses', loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
