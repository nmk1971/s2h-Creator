import { IApiResponse } from './../../helpers/api-response.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
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
  public hide: boolean;
  private subscription: Subscription;
  public genders: Gender[] = [
    {name: 'Homme'},
    {name: 'Femme'}
  ]


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private userService: UserService) {  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      genderControl:['',Validators.required],
      email: ['',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] ? this.route.snapshot.queryParams['returnUrl'] : '/';
  }

  onSubmit() {
    let user={
      fullusername:`${this.signupForm.value.firstName} ${this.signupForm.value.lastName}`,
      email:this.signupForm.value.email,
      gender:this.signupForm.value.genderControl.name,
      password:this.signupForm.value.password
    };

    this.subscription=this.userService.postUser(user).subscribe({
      next:(response: IApiResponse)=>{
        this.snackBar.open(response.status+'\n'+response.message,'X',{duration:4000});
        this.signupForm.reset();
        this.router.navigate(['/home']);
      },
      error:(error: Error)=>{
          this.snackBar.open(error.message,'close');
      },
      complete:console.log


    })
    
  
  }


  getErrorMessage(){
    return 'invalid email, try again'
  }
}
 
