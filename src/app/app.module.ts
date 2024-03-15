import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './dashboard/data/data.component';
import { AddDataComponent } from './dashboard/add-data/add-data.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { KindergartenComponent } from './kindergarten/kindergarten.component';
import { AddKGDataComponent } from './kindergarten/add-data/add-kg-data.component';
import { KGDataComponent } from './kindergarten/data/kg-data.component';
import { KindergartendetailsComponent } from './kindergartendetails/kindergartendetails.component';
import { KGDetailsDataComponent } from './kindergartendetails/data/kgdetails-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KindergartenComponent,
    AddDataComponent,
    KGDataComponent,
    AddKGDataComponent,
    DataComponent,
    HeaderComponent,
    ButtonComponent,
    LoadingSpinnerComponent,
    KindergartendetailsComponent,
    KGDetailsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
