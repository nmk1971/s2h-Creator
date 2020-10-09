import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from './../../user/user.model';
import { AuthenticationService } from './../../user/authentication.service';
import { Subscription } from 'rxjs';
import { IGroup } from './../group.model';
import { GroupService } from './../group.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GroupListDataSource, GroupListItem } from './group-list-datasource';
import { IApiResponse } from '../../helpers/api-response.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements  OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  public currentGroups: IGroup[];
  private subscription: Subscription;
  public currentCreator: IUser;

  constructor(
    private groupService: GroupService,
    private authenticationService: AuthenticationService,
    private snackbar: MatSnackBar){
    this.authenticationService.currentUser.subscribe(user => this.currentCreator = user );
  }

  ngOnInit(): void {

    this.subscription = this.groupService.getGroupsByCreator(this.currentCreator._id).subscribe({
      next: (data: IApiResponse) => {
        this.currentGroups = data.payload;
        this.snackbar.open(data.message, 'X', { duration: 3000 });
      },
      error: (error: Error) => {
        this.snackbar.open(error.message, 'X');
      },
      complete: () => {

      }
    }
    );
  }
}
