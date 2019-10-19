import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {RetourDTO} from "./DTOs/RetourDTO";
import { AccueilComponent } from './accueil/accueil.component';
import { GestionComponent } from './gestion/gestion.component';
const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'auth', component: GestionComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GestionComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatStepperModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [RetourDTO],
  bootstrap: [AppComponent]
})

export class AppModule { }
