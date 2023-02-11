import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialComponent } from './credential/credential.component';
import { GamepageComponent } from './gamepage/gamepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "credentials", component: CredentialComponent},
  {path: "game/:p1 :p2", component: GamepageComponent},
  {path: "pagenotfound", component: PagenotfoundComponent},
  {path: "**", redirectTo: "pagenotfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
