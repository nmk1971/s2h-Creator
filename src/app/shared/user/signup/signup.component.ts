import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';
interface Gender {
  name: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  returnUrl: string;
  public hide:boolean;
  public genders: Gender[] = [
    {name: 'Homme'},
    {name: 'Femme'}
  ]


  constructor(private fb:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar:MatSnackBar,
    private authenticationService: AuthenticationService) { 
         // redirect to home if already logged in
     if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/creator/home']);
     }
    }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      genderControl:['',Validators.required],
      email: ['',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] ? this.route.snapshot.queryParams['returnUrl'] : '/';
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }


  getErrorMessage(){
    return 'invalid email, try again'
  }
}
 
