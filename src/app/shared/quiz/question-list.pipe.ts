import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionListFilter'
})
export class QuestionListPipe implements PipeTransform {

  transform(value: any, args: any): any {
  if (args !== '') {
    return value.filter(
      q => ( q.questionText.toLowerCase().indexOf(args.toLowerCase()) !== -1)
      || ( q.question_type.toLowerCase().indexOf(args.toLowerCase()) !== -1))
      
  } else {
    return value;
  }
  }

}



