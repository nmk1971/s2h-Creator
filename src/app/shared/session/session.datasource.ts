import { SessionService } from './session.service';
import { ISession } from './session.model';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, BehaviorSubject, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';



export class SessionDataSource implements DataSource<ISession> {

    private sessionsSubject = new BehaviorSubject<ISession[]>([]);
    public totalCount$ = new BehaviorSubject<number>(0);


    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private sessionService: SessionService) { }

    loadSessions(creatorId: string,
                 page: number,
                 limit: number,
                 sort: string,
                 direction: string,
                 filter: string): void {

        this.loadingSubject.next(true);

        this.sessionService.findSessionsByCreator(
            creatorId, page, limit, sort, direction, filter).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((data: {totalCount: number, items: ISession[]}) => {
                this.sessionsSubject.next(data.items);
                this.totalCount$.next(data.totalCount);
            });

    }

    connect(collectionViewer: CollectionViewer): Observable<ISession[]> {
        return this.sessionsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.sessionsSubject.complete();
        this.loadingSubject.complete();
        this.totalCount$.complete();
    }

}
