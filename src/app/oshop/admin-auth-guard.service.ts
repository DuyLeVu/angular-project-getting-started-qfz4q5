import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from '../oshop/user.service';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService,private userService: UserService) { }

  canActivate(): Observable<boolean>{ 
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }
}