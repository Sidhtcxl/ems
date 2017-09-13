import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RegisterComponent} from './register/register.component';
import {AppRouting} from "./routing/routing";
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { LoginComponent } from './login/login.component';
import { FormLRComponent } from './form-lr/form-lr.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EqualValidator} from "./shared/equal-validator";
import { HomeComponent } from './home/home.component';
import {ImageUploadModule} from "angular2-image-upload";
import { DocumentUploadComponent } from './document-upload/document-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    MainContentComponent,
    RegisterComponent,
    ApplicantFormComponent,
    LoginComponent,
    FormLRComponent,
    EqualValidator,
    HomeComponent,
    DocumentUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    ReactiveFormsModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
