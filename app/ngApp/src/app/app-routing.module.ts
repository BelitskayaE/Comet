import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import {LoginFormComponent} from "./login-form/login-form.component";
import {BackComponent} from "./back/back.component";




const routes: Routes = [
  {path: '' , component:MainComponent},
  {path: 'login' , component: LoginFormComponent,BackComponent},
  {path: 'signup', component: SignUpFormComponent},
  {
    path: "",
    redirectTo: "/defaultRoot",
    pathMatch: "full"
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
