import { ISession } from './../session.model';
import { SessionService } from './../session.service';
import { IQuiz } from './../../quiz/quiz.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IGroup } from './../../group/group.model';
import { IApiResponse } from './../../helpers/api-response.model';
import { IUser } from './../../user/user.model';
import { Subscription } from 'rxjs';
import { GroupService } from './../../group/group.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../user/authentication.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit, OnDestroy {
  public readonly evaluationTypes = [
    'Sondage',
    'Evaluation des prérequis',
    'Evaluation Formative',
    'Evaluation Sammative'];
  public groups: any;
  public openSessionForm: FormGroup;
  private userSubscription: Subscription;
  private groupSubscription: Subscription;
  private sessionSubscription: Subscription;

  private creator: IUser;
  public concernedQuiz: IQuiz;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private groupService: GroupService,
    private authService: AuthenticationService,
    private sessionService: SessionService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.userSubscription = this.authService.currentUser.subscribe(user => this.creator = user);
    this.concernedQuiz = this.route.snapshot.data?.quiz?.payload as IQuiz;
  }

  ngOnInit(): void {
    const grps = [];
    this.groupSubscription = this.groupService.getGroupsByCreator(this.creator._id)
      .pipe(
        map(data => data.payload),
        map(groups => {
          groups.forEach((group: IGroup) => {
            grps.push({ id: group._id, label: group.label });
          });
          return grps;
        }))
      .subscribe({
        next: data => {
          console.log(data);
          this.groups = data;
        }
      });
    this.openSessionForm = this.fb.group({
      evaluationType: [''],
      isAnonymous: true,
      returnCorrectResponse: true,
      group: ['']
    });
  }


  onSubmit(): void {

    let sendedSession: ISession;
    sendedSession = { ...this.openSessionForm.value };
    if (this.openSessionForm.value.group === '') {
      this.openSessionForm.value.group = null;
    }
    sendedSession.creator = this.creator._id;
    sendedSession.idquiz = this.concernedQuiz._id;
    this.sessionSubscription = this.sessionService.createSession(sendedSession).subscribe({
      next: (response: IApiResponse) => {
        if (response.status === 'success') {
          this.snackBar.open(response.status + '\n' + `${response.message}`, 'X', { duration: 6000 });
          this.router.navigate(['/creator/session/list']);
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

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.groupSubscription) {
      this.groupSubscription.unsubscribe();
    }
    if (this.sessionSubscription) {
      this.sessionSubscription.unsubscribe();
    }

  }
}
