import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { PlatformComponent } from './platform/platform.component';
import { ContactComponent } from './contact/contact.component';
import { JavaComponent } from './java/java.component';
import { UiComponent } from './ui/ui.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"products",component:ProductsComponent},
  {path:"services",component:ServicesComponent, children:[
    {path:"java",component:JavaComponent},
    {path:"ui",component:UiComponent},

    
  ]},
  {path:"platform",component:PlatformComponent},
  {path:"contact",component:ContactComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
