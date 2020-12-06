import { Subscription } from 'rxjs';
import { AuthenticationService } from './../../shared/user/authentication.service';
import { IUser } from './../../shared/user/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public user: IUser;
  private subscription: Subscription;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
        this.subscription = this.authenticationService.currentUser.subscribe(
          {
            next: data => {
            this.user = {...data};
            },

          error: err => console.log(err),
          complete: () => console.log('Ok')
        }
        );
  }

  ngOnDestroy(): void{
    if (this.subscription){
        this.subscription.unsubscribe();
    }
  }

logout(): void{
  this.authenticationService.logout();
  this.router.navigate(['/home']);
}

}
