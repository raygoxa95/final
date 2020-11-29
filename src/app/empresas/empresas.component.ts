import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService} from "../services/auth.service";
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {
  diccionario:any;
  constructor(public authService:AuthService) {
    this.getdata()
   }

  ngOnInit(): void {
  }

  // si algo tengo que escribir el comando 'npm start' para poder ejecutar el llamado hacia la api
  getdata(){
    this.authService.getAllClient().subscribe(res=>{
      // console.log(res)
      this.diccionario= res
      
      // console.log(this.diccionario)
    })
  }

  // @Output() nombreHijo= new EventEmitter<string>();
  envioDataEmpresa(index: string){
    // console.log(index)
    // this.authService.infoEmpresa(index)
    // this.authService.data$.emit(index)
    // this.nombreHijo.emit(index)

    this.authService.datoJson=index;
  }
}
