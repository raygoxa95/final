import { Injectable , NgZone, EventEmitter} from '@angular/core';
// Como arreglar el error CORS Angular
// https://www.youtube.com/watch?v=iXbsn-qaqsw
// https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/

// Angular 5 & chart.js en español, con Data desde API
// https://www.youtube.com/watch?v=nBX_z1vPa1E


// https://www.youtube.com/watch?v=bV8emCBmFHk&list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU&index=1

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { UserService } from "../services/user.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument, QuerySnapshot, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { auth } from 'firebase';
import { Observable, Subject } from 'rxjs';



interface dataTransaction {
  fromAddress: string;
  privateKey: string;
  toAddress: string;
  ammount: string;
 
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  datoFilto$ = new EventEmitter<boolean>();
  UserData$ = new EventEmitter<any>();
  constructor(
    public afs: AngularFirestore,   //angular db
    public afAuth: AngularFireAuth, //autenticacion fire auth
    public router: Router,  
    public ngZone: NgZone ,
    public http: HttpClient
  ) {    
    
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  
  SignIn(email, password) {

    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          
          
            
            this.router.navigate(['dashboard']); 
            this.SetUserData(result.user);
            this.datoFilto$.emit(true) //emite que esta logeado  
          
        });
        
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        
        
        this.SendVerificationMail();
        this.SetUserData(result.user);
        this.SignOut();
        this.router.navigate(['Autenticacion']);
        // this.datoFilto$.emit(true) //emite que esta logeado
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  
   async SendVerificationMail() {
    await (await this.afAuth.currentUser).sendEmailVerification();
    // this.router.navigate(['Autenticacion']);
    
  }

  
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  
  GoogleAuth() {
    
    return this.AuthLogin(new auth.GoogleAuthProvider());
    
  }

  
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
        this.SetUserData(result.user);
        this.router.navigate(['dashboard']);
          this.datoFilto$.emit(true) //emite que esta logeado
          
        
        })
        
        // console.log(result.user.displayName)
      
      
    }).catch((error) => {
      window.alert(error)
    })
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: UserService = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['Autenticacion']);
    })
  }


  getAllClient(): Observable<any>{
    // http://127.0.0.1:4000/empresa/?format=json
    return  this.http.get<any>('/datoUsuarioEmpresa/?format=json'); 
    // return  this.http.get<any>('datoUsuarioEmpresa/?format=json'); 
  }

  getClient(index): Observable<any>{
    // http://127.0.0.1:4000/empresa/?format=json
    // console.log(index)
    return  this.http.get<any>('datoUsuarioEmpresa/'+(index+1) +'/?format=json'); //debo de colocar en el index+1 porque no tiene valor inicial 
    // return  this.http.get<any>('datoUsuarioEmpresa/'+(index+1) +'/?format=json'); 
  }

  datoJson:string = "hola mundo";
  
  
  infoEmpresa(index: string){    
    // console.log(index)
    this.datoJson= index+1;
  }


  data={}
  usuarioTransaccion(FromAddress,Private,ToAddress,Ammount): Observable<any>{
    // http://127.0.0.1:5000/usuarioTransaccion
    // console.log(FromAddress,Private,ToAddress,Ammount)
    
    this.data={
      "fromAddress":FromAddress,
      "privateKey":Private,
      "toAddress":ToAddress,
      "ammount":Ammount
    }
    var headers = new Headers({'Content-Type': 'application/json'});
    let strToJson= JSON.parse(JSON.stringify(this.data)); //convierto a json y el 'JSON.stringify' es para convertir objeto a string
    console.log(strToJson)
    console.log(JSON.stringify(this.data)  ); //'JSON.stringify' es para convertir objeto a string
    return  this.http.post<dataTransaction>('pruebaTransaccion/',{'cadena':strToJson},{ 
      // return  this.http.post<dataTransaction>('usuarioTransaccion/',strToJson,{ pruebaTransaccion
      headers:new HttpHeaders()
      .set('Content-Type','application/json')
      });
  }

  


}

