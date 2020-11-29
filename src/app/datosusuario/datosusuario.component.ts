import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-datosusuario',
  templateUrl: './datosusuario.component.html',
  styleUrls: ['./datosusuario.component.scss']
})
export class DatosusuarioComponent implements OnInit {

  usuario: any;
  constructor(
              public authService: AuthService) {
                
               }

  ngOnInit(): void {
    this.usuario= this.authService.userData
    // console.log(this.usuario)
  }

}
