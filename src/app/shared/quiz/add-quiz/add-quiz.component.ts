import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit,OnChanges {
  public currentId$:Observable<any>;
  constructor(private route$:ActivatedRoute) {
    
   }
  ngOnChanges(changes: SimpleChanges): void {
  
  }

  ngOnInit(): void {
    this.currentId$=this.route$.params
  }

}
