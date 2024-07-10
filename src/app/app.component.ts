import { Component } from '@angular/core';
import { AuthService } from './oshop/auth.service';
import { UserService } from './oshop/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if(!user) return;
      
      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if(!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
