import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { JavaComponent } from './java/java.component';
import { UiComponent } from './ui/ui.component';
import { PlatformComponent } from './platform/platform.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    ServicesComponent,
    JavaComponent,
    UiComponent,
    PlatformComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
