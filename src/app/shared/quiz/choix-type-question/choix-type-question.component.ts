import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-choix-type-question',
  templateUrl: './choix-type-question.component.html',
  styleUrls: ['./choix-type-question.component.scss']
})
export class ChoixTypeQuestionComponent implements OnInit {
  public qtypes = ['QCM', 'QCU', 'INPUT', 'ORDERING'];
  public question_type:string;

  constructor(
    public dialogRef: MatDialogRef<ChoixTypeQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
  }

  confirm() {
    this.dialogRef.close(this.question_type);
  }

  cancel() {
    this.dialogRef.close(false);
  }

}
