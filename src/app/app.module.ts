import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';


import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { LoginComponent } from './login/login.component'
import { FormsModule} from '@angular/forms'; 
import {HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
    ],
  providers: [DishService,PromotionService,LeaderService],
  entryComponents:[LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
