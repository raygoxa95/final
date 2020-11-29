import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AutenticacionComponent} from '../app/autenticacion/autenticacion.component'
import {RegistroComponent} from '../app/registro/registro.component'
import {NavbarComponent} from '../app/navbar/navbar.component'
import {AcercaComponent} from '../app/acerca/acerca.component'
import {DashboardComponent} from '../app/dashboard/dashboard.component'
import { DatosempresaComponent } from './datosempresa/datosempresa.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AuthGuard } from './guards/auth.guard';
import { DatosusuarioComponent } from './datosusuario/datosusuario.component'
import { DonaethComponent } from './donaeth/donaeth.component';
// DashboardComponent

// AcercaComponent
const routes: Routes = [
          // {
          //   path:'' , pathMatch: 'full', redirectTo: 'Autenticacion'
          // },          
          {
            path:'Autenticacion' , component: AutenticacionComponent
          } ,
          {
            path:'Registro' , component: RegistroComponent
          },
          {
            path:'Navbar' , component: NavbarComponent
          },
          {
            path:'Acerca' , component: AcercaComponent
          },
          {
            path:'dashboard' , 
            component: DashboardComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'empresa' , component: DatosempresaComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'empresas' , component: EmpresasComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'usuarioInfo' , component: DatosusuarioComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'donaeth' , component: DonaethComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'**' , pathMatch: 'full', redirectTo: 'Autenticacion'
          }
          
          
];

DatosusuarioComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
