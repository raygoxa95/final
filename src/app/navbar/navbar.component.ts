import { Component, OnInit } from '@angular/core';

import { AuthService } from "../services/auth.service";

import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Subscription } from 'rxjs';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogin: boolean;
  matcher = new MyErrorStateMatcher();
  saldoSubcripcion: Subscription;
  isLogin: boolean= false;
  
   //emite cual quier cosa string
  constructor(
        public authService: AuthService
    ) { 
      
    }

  async ngOnInit() {
    this.saldoSubcripcion=  await this.authService.datoFilto$.subscribe(texto2=>{ //mensaje del filtro
      this.isLogin=texto2
      
    })
  }

  bo(){
    
  }

  salir(){
    this.authService.SignOut()
    this.authService.datoFilto$.emit(false)
  }

}
