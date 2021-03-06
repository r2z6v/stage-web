import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ContataComponent } from './contata/contata.component';
import { TeamComponent } from './team/team.component';
import { FristprogetComponent } from './fristproget/fristproget.component';
import { StagePipe } from './home/pipe/stage.pipe';
import { UpperCasePipe } from '@angular/common';
//import { StagePipe } from './home/pipe/stage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    NavbarComponent,
  
    BodyComponent,
    FooterComponent,
    ContataComponent,
    TeamComponent,
    FristprogetComponent,
    StagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
