import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminComponent } from './component/admin/admin.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  // {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'products/cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent, canActivate: [AdminAccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
