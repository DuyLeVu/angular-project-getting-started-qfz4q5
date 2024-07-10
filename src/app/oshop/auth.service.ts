import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AppUser } from '../models/app-user';
import { UserService } from '../oshop/user.service';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/Observable/of';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AuthService {
   user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  get appUser$() {
    return []
  // get appUser$(): Observable<AppUser> {

    // return this.user$
    // .switchMap(user => {
    //   if(user) return this.userService.get(user.uid);

    //   return Observable.of(null);
    // });
  }
}