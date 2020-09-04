import { Subscription } from 'rxjs';
import { AuthenticationService } from './../../shared/user/authentication.service';
import { IUser } from './../../shared/user/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {
  public _user:IUser;
  private subscription:Subscription;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
        this.subscription=this.authenticationService.currentUser.subscribe(
          {
            next:data=>{
            //  console.log(data);
            this._user={...data};
            },
         
          error:err=>console.log(err),
          complete:()=>console.log('Ok')
        }
        );
  }

  ngOnDestroy(){
        this.subscription.unsubscribe();
  }

}
