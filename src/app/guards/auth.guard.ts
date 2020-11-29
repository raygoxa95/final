import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from '../services/auth.service';

// https://www.youtube.com/watch?v=-hbgdr7h7lE

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService,
              public router: Router
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.userData===null || this.authService.userData===undefined){ 
        alert("No tienes acceso")
        this.router.navigate(['/Autenticacion']);
        return false;
      }else{
        // console.log(this.authService.userData)
        return true;
      }
    
    
  }
  
}
