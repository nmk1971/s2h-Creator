import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {
  public readonly evaluationTypes = [
    'Evaluation des prérequis',
    'Evaluation Formative',
    'Evaluation Sammative'];

    public openSessionForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.openSessionForm = this.fb.group({
      evalutionType: [''],
      isAnonymous: [true]
    });
  }

  onSubmit(): void{

  }

}
