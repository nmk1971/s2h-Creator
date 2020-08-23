import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {getQuiz} from './quiz-source';
import { MatTableDataSource  } from '@angular/material/table';


interface IQuiz {
  id: number;
  title: string;
  cover: string;
  status:boolean
}

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit,OnChanges {
  public displayedColumns = ["id", "title", "cover", "status","actions"];
  datasource:MatTableDataSource<IQuiz>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  resultsLength = 0;
  public quiz:IQuiz[];
  constructor() {
    this.quiz=getQuiz();  
   }

  ngOnInit(): void {
    this.datasource=new MatTableDataSource<IQuiz>(this.quiz);
    this.resultsLength=this.quiz.length;
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  
  ngOnChanges() {
    this.datasource = new MatTableDataSource(this.quiz);
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  delete(id){
    console.log(id)
  }

  edit(id){
    console.log(id)
  }
 

}
