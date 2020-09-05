import { IUser } from './../../user/user.model';
import { AuthenticationService } from './../../user/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from './../quiz.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IApiResponse } from '../../helpers/api-response.model';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit,OnChanges {
  public currentUser:IUser;
  public createQuizForm:FormGroup;
  private subscription:Subscription;
  private userSubscription:Subscription;
  
  constructor(
    private router: Router,
    private fb:FormBuilder, 
    private quizService:QuizService,
    private snackBar:MatSnackBar,
    private authenticationService:AuthenticationService
    ) {
    this.createQuizForm=this.fb.group({
      title:[''],
      description:[''],
      theme:[''],
      isShared:[false]

    });
   }


  ngOnChanges(changes: SimpleChanges): void {
  
  }

  ngOnInit(): void {
    this.userSubscription=this.authenticationService.currentUser.subscribe(data=>this.currentUser=data);
  }

  onCreate(){
   
      let quiz={...this.createQuizForm.value};
      quiz.creator=this.currentUser._id;
      quiz.dateCreated=new Date();
      quiz.cover='assets/quiz.jpg';
      this.subscription=this.quizService.postQuiz(quiz).subscribe({
        next:(response:IApiResponse)=>{
          this.snackBar.open(response.status+'\n'+response.message,'X',{duration:4000});
           this.createQuizForm.reset();
         // this.router.navigate(['/home']);
        },
        error:(error:Error)=>{
            this.snackBar.open(error.message,'close');
        },
        complete:console.log
      })

  }
}
