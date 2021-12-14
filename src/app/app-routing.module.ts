import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { ServiceComponent } from './components/service/service.component';
import { WebboardComponent } from './components/webboard/webboard.component';

const routes: Routes = [
{path: '' , redirectTo: "/product" , pathMatch:'full'},
{path: 'product' , component: ProductComponent},
{path: 'webboard' , component: WebboardComponent},
{path: 'menu' , component: MenuComponent},
{path: 'service' , component: ServiceComponent},
{path: 'contact' , component: ContactComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
