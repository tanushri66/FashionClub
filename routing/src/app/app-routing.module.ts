import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { BeautyComponent } from './beauty/beauty.component';
import { SkincareComponent } from './skincare/skincare.component';
import { HaircareComponent } from './haircare/haircare.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'men', component: MenComponent, canActivate: [authGuard] },
  { path: 'women', component: WomenComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'beauty', component: BeautyComponent, children: [{ path: 'skincare', component: SkincareComponent }, { path: 'haircare', component: HaircareComponent }] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
