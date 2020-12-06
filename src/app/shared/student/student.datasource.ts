import { StudentService } from './student.service';
import { IStudent } from './student.model';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, BehaviorSubject, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';



export class StudentDataSource implements DataSource<IStudent> {

    private studentsSubject = new BehaviorSubject<IStudent[]>([]);
    public totalCount$ = new BehaviorSubject<number>(0);


    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private studentService: StudentService) { }

    loadStudents(creatorId: string,
                 page: number,
                 limit: number,
                 sort: string,
                 direction: string,
                 filter: string): void {

        this.loadingSubject.next(true);

        this.studentService.findStudentsByCreator(
            creatorId, page, limit, sort, direction, filter).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((data: {totalCount: number, items: IStudent[]}) => {
                this.studentsSubject.next(data.items);
                this.totalCount$.next(data.totalCount);
            });

    }

    connect(collectionViewer: CollectionViewer): Observable<IStudent[]> {
  //      console.log('Connecting data source');
        return this.studentsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.studentsSubject.complete();
        this.loadingSubject.complete();
        this.totalCount$.complete();
    }

}
