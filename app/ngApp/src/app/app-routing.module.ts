import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import {LoginFormComponent} from "./login-form/login-form.component";



let defaultRoot = 'MainComponent';

const routes: Routes = [
  {path: defaultRoot + '', component:MainComponent},
  {path: 'login' + '', component: LoginFormComponent},
  {path: 'signup' + '', component: SignUpFormComponent},
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
