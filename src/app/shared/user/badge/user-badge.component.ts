import { AuthenticationService } from './../authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IUser } from '../user.model';


@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {
  @Input() userInfo:IUser;
  constructor(
    private authenticationService:AuthenticationService,
    private router: Router
    ) {

     }

  ngOnInit() {
  }

  getAvatar(url) {
    return url ? `${environment.apiUrl}/${url}` : 'assets/default-avatar.jpg'
  }
  
logout(){
  this.authenticationService.logout();
  this.router.navigate(['/home']);
}
}
