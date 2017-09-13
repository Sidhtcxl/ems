import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import { RegisterComponent} from '../register/register.component';
import { ApplicantFormComponent } from '../applicant-form/applicant-form.component';
import { LoginComponent } from '../login/login.component';
import { MainContentComponent } from '../main-content/main-content.component';
import {FormLRComponent} from "../form-lr/form-lr.component";
import {HomeComponent} from "../home/home.component";
import {DocumentUploadComponent} from "../document-upload/document-upload.component";


const ROUTES: Routes = [
  {path: '', component: FormLRComponent, children: [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegisterComponent}
  ]},
  {path: 'home', component: HomeComponent, children: [
      {path: 'applicationform', component: ApplicantFormComponent},
      {path: 'docupload', component: DocumentUploadComponent}
  ]},
  {path: '**', redirectTo: 'login'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting {}
