import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot){
    return this.auth.user$.map(user => {
      if (user) return true;

      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    });
  }
}