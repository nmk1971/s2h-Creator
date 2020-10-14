import { IStudent } from './../../student/student.model';
import { StudentService } from './../../student/student.service';
import { IGroup } from './../group.model';
import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IUser } from '../../user/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../group.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../user/authentication.service';
import { IApiResponse } from '../../helpers/api-response.model';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit, OnChanges, OnDestroy {
  public currentUser: IUser;
  public createGroupForm: FormGroup;
  private subscription: Subscription;
  private userSubscription: Subscription;
  public isCreated = false;
  public currentGroup: IGroup;
  private updateSubscription: Subscription;

  public studentToUpdate: IStudent;
  public currentStudent: IStudent;
  public context = 'new'; // 'new' Student  'update'

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private groupService: GroupService,
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private studentsService: StudentService  ) {
    this.createGroupForm = this.fb.group({
      label: [''],
      description: ['']
    });

  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.userSubscription = this.authenticationService.currentUser.subscribe(user => this.currentUser = user);

    // when navigated from update route
    const data = this.route.snapshot.data?.group?.payload as IGroup;
    console.log('FROM ngInit : ', data);
    if (data) {
      this.createGroupForm = this.fb.group({
        label: [data.label],
        description: [data.description]
      });
      this.isCreated = true;
      this.currentGroup = data;
      this.studentsService.loadStudents(data.students);

    } else {

      this.studentsService.loadStudents([]);
    }
  }

  createGroup(): void {
    const theGroup = { ...this.createGroupForm.value };
    theGroup.owner = this.currentUser._id;
    this.subscription = this.groupService.postGroup(theGroup).subscribe({
      next: (response: IApiResponse) => {
        if (response.status === 'success') {
          this.snackBar.open(response.status + '\n' + response.message, 'X', { duration: 4000 });
          this.currentGroup = response.payload;
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


  updateGroup(): void {
    this.updateSubscription = this.groupService.updateGroup(this.currentGroup._id, this.createGroupForm.value).subscribe({
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

  saveGroup(): void {
    if (this.isCreated) {
      this.updateGroup();
    } else {
      this.createGroup();
    }
  }

  updateStudentContext(student: IStudent): void {
    this.studentToUpdate = { ...student };
    this.context = 'update';

  }

  onStudentSaveHandler(event){
    console.log(event);
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
    if (this.userSubscription) { this.userSubscription.unsubscribe(); }
    if (this.updateSubscription) { this.updateSubscription.unsubscribe(); }
  }

}
