import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContataComponent } from './contata/contata.component';
import { FristprogetComponent } from './fristproget/fristproget.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [{path: "", redirectTo: "firstprojecht/home", pathMatch: "full"},
  {path: "firstprojecht", component : FristprogetComponent, children: [ 
  {path: "home", component: HomeComponent},
  {path : "team", component: TeamComponent},
  {path: "contact", component: ContataComponent}]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

