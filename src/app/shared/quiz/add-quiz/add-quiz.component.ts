import { IQuestion } from './../quiz-list/question.model';
import { QuestionService } from './../question.service';
import { IApiResponse } from './../../helpers/api-response.model';
import { IQuiz } from './../quiz.model';
import { ChoixTypeQuestionComponent } from '../choix-type-question/choix-type-question.component';
import { IUser } from './../../user/user.model';
import { AuthenticationService } from './../../user/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from './../quiz.service';
import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit, OnChanges, OnDestroy {
  public currentUser: IUser;
  public createQuizForm: FormGroup;
  private subscription: Subscription;
  private userSubscription: Subscription;
  private updateSubscription: Subscription;
  public currentQuestionType: string;
  public isCreated = false;
  public currentQuiz: IQuiz;
  public questionToUpdate: IQuestion;

  public currentQuestion: IQuestion;
  public context = 'new'; // 'new' Question  'update'


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private quizService: QuizService,
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {
    this.createQuizForm = this.fb.group({
      title: [''],
      description: [''],
      theme: [''],
      isShared: [false]
    });

  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.userSubscription = this.authenticationService.currentUser.subscribe(data => this.currentUser = data);

    // when navigated from update route
    const data = this.route.snapshot.data?._quiz?.payload as IQuiz;
    if (data) {
      this.createQuizForm = this.fb.group({
        title: [data.title],
        description: [data.description],
        theme: [data.theme],
        isShared: [data.isShared]
      });
      this.isCreated = true;
      this.currentQuiz = data;
      this.questionService.loadQuestions(data.questions);

    } else {

      this.questionService.loadQuestions([]);
    }
  }

  createQuiz() {
    const quiz = { ...this.createQuizForm.value };
    quiz.creator = this.currentUser._id;
    quiz.dateCreated = new Date();
    quiz.cover = 'assets/quiz.jpg';
    this.subscription = this.quizService.postQuiz(quiz).subscribe({
      next: (response: IApiResponse) => {
        if (response.status == 'success') {
          this.snackBar.open(response.status + '\n' + response.message, 'X', { duration: 4000 });
          this.currentQuiz = response.payload;
          this.isCreated = true;
        } else {
          this.snackBar.open(response.status + '\n' + response.message, 'X');
        }
      },
      error: (error) => {
        this.snackBar.open(error, 'close');
      },
      complete: console.log
    });

  }

  saveQuiz() {
    if (this.isCreated) {
      this.updateQuiz();
    } else {
      this.createQuiz();
    }
  }

  updateQuiz() {
    this.updateSubscription = this.quizService.updateQuiz(this.currentQuiz._id, this.createQuizForm.value).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.status + '\n' + response.message, 'X', { duration: 4000 });
      },
      error: (error) => {
        this.snackBar.open(error, 'close');
      },
      complete: console.log
    }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChoixTypeQuestionComponent, {
      width: '250px',
      data: { question_type: ['QCM', 'QCU', 'INPUT', 'ORDERING'] }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.currentQuestionType = result;
    });

    this.context = 'new';
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
    if (this.userSubscription) { this.userSubscription.unsubscribe(); }
    if (this.updateSubscription) { this.updateSubscription.unsubscribe(); }
  }

  updateQuestionContext(question: IQuestion) {
    this.currentQuestionType = question.question_type;
    this.questionToUpdate = { ...question };
    this.context = 'update';

  }

}
