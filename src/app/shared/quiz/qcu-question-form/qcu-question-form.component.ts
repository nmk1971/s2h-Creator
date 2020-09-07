import { FormGroup, FormBuilder } from '@angular/forms';
import { IQCXResponse } from './../add-quiz/qcu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qcu-question-form',
  templateUrl: './qcu-question-form.component.html',
  styleUrls: ['./qcu-question-form.component.scss']
})
export class QcuQuestionFormComponent implements OnInit {
  public qcuResponseList:IQCXResponse[]=[];
  public QCUQuestionForm:FormGroup
  constructor(private fb:FormBuilder) { 
    this.QCUQuestionForm=fb.group({
      questionText:['']
    })
    
  }

  ngOnInit(): void {
    this.qcuResponseList.push({label:'',isValid:false});
    this.qcuResponseList.push({label:'',isValid:false});
  }

  display(v){
    console.dir(v)
  }
  addResponse(){
    this.qcuResponseList.push({label:'',isValid:false});
  }

  radioChecked(index){
    for (var i=0;i<this.qcuResponseList.length;i++){
      if(i !== index){ 
        this.qcuResponseList[i].isValid = false;
      }else{
        this.qcuResponseList[i].isValid = true;
      } 
    }
  }

}
