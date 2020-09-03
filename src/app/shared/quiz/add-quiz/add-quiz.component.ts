import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit,OnChanges {
  public currentId$:Observable<any>;
  public createQuizForm:FormGroup;
  constructor(private route$:ActivatedRoute, private fb:FormBuilder) {
    this.createQuizForm=fb.group({
      title:[''],
      quizImage:['']
    });
   }
  ngOnChanges(changes: SimpleChanges): void {
  
  }

  ngOnInit(): void {
    this.currentId$=this.route$.params
  }

  onCreate(){
    console.log(this.createQuizForm.value.quizImage);
  }
}
