import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import {GoogleMap} from '@angular/google-maps'
import { AuthService} from "../services/auth.service";
@Component({
  selector: 'app-datosempresa',
  templateUrl: './datosempresa.component.html',
  styleUrls: ['./datosempresa.component.scss']
})

// para la api mia
// https://console.cloud.google.com/apis/credentials?authuser=1&hl=es-419&project=aerobic-inkwell-293603


// Curso de Angular - Componente Google Maps
// https://www.youtube.com/watch?v=fnC5lOaOc5I

// https://developers.google.com/maps/documentation/javascript/overview

// Google Maps con Angular 10 🌍
// https://www.youtube.com/watch?v=DQZTeZZXYBk


// Cómo crear una clave de API de Google para usar los mapas
// https://www.youtube.com/watch?v=GsTTQeaxv6Q




export class DatosempresaComponent implements OnInit {
  // @Input() nombreHijo: string="q"
  


  lat: number;
  lng: number;
  zoom: number;
  mapType: string;
  pos: any;
  label: any;
  // index: string;
  // saldoSubcripcion: Subscription;
  // index: string= "1"; 
  
  
  datoJson= "";
  datoEmpres= {}
  // {"userEmpresa":string,"email":string,"telefono":string,"lat":string,"lng":string};
  
  // zoom= 6;
   constructor(public authService: AuthService  ) {
    // this.lat= 40;
    // this.lon= -3;
    this.zoom= 6;
    this.datoEmpres={name_empresa:"",phone:"",address:"",descripLarge:"",email:"",lat:Number,lng:Number};
  

    // this.mapType= 'hybrid'
    

    // this.datoEmpres=this.authService.getClient(this.datoJson)
    
    
    
    // this.datoEmpres.lat
    // this.datoEmpres.lng
    
    
    

    // console.log("constructor: "+this.datoEmpres)
   }

   getdata(datoJson){
    this.authService.getClient(datoJson).subscribe(res=>{
      // console.log(res)
      this.pos = {lat: Number(res.lat), lng: Number(res.lng)}
      this.label={color:'blue',text: res.name_empresa}
      
      this.datoEmpres= {name_empresa:res.name_empresa,
                        phone:res.phone,
                        address:res.address,
                        descripLarge: res.descripLarge,
                        email:res.email,
                        lat:Number(res.lat),
                        lng:Number(res.lng)};
      
      // {
      //   "name_empresa": "fdgsdfgsfdg",    
      //   "phone":"345435345435",
      //   "address": "34534523",        
      //   "descripLarge":"descripLarge",
      //   "email": "retawer0233@gmail.com",
      //   "lat": "23.23",
      //   "lng": "12.23"
      // }
      // console.log(this.diccionario)
    })
  }
   
   ngOnInit() {
    this.datoJson= this.authService.datoJson
    this.getdata(this.datoJson);
    // console.log(">>>> Message")
    // this.saldoSubcripcion =  this.authService.data$.subscribe(mensaje=>{      
    //   this.index= mensaje
    //   console.log("data: "+this.index)
    //   console.log("<<<<<serivcio: "+this.authService.datoJson)
      
    // })
  }

}
