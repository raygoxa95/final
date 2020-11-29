import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//nuevos
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule } from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox'; //nuevo
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegistroComponent } from './registro/registro.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { AcercaComponent } from './acerca/acerca.component';
import {MatGridListModule} from '@angular/material/grid-list';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AuthService } from "./services/auth.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { DatosempresaComponent } from './datosempresa/datosempresa.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { EmpresasComponent } from './empresas/empresas.component';
import { DatosusuarioComponent } from './datosusuario/datosusuario.component';
import { DonaethComponent } from './donaeth/donaeth.component'
// api= 'AIzaSyDTlSdiKgOEchG9M_wepFTvAcvyPW-_1QU'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    AutenticacionComponent,
    AcercaComponent,
    DashboardComponent,
    DatosempresaComponent,
    EmpresasComponent,
    DatosusuarioComponent,
    DonaethComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule, //nuevo
    MatInputModule, //nuevo
    MatIconModule, //nuevo
    MatCheckboxModule, //nuevo
    MatSidenavModule, //nuevo
    MatRadioModule, //nuevo
    MatSelectModule,  //nuevo
    MatChipsModule, //nuevo
    HttpClientModule, //nuevo
    MatListModule, //nuevo
    MatToolbarModule, //nuevo
    AngularFireModule.initializeApp(environment.firebase),  //nuevo
    AngularFireAuthModule,  //nuevo
    AngularFirestoreModule, //nuevo,
    MatCardModule, //nuevo,
    MatGridListModule, //nuevo,
    AngularFireDatabaseModule, //nuevo,
    GoogleMapsModule , //nuevo,
    
  ],
  exports: [RouterModule], //nuevo
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
