import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ProductComponent } from './components/product/product.component';
import { WebboardComponent } from './components/webboard/webboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProductComponent,
    WebboardComponent,
    ContactComponent,
    MenuComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
