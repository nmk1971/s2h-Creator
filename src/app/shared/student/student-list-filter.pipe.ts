import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentListFilter'
})
export class StudentListFilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (args !== '') {
      return value.filter(
        student => ( student.firstname.toLowerCase().indexOf(args.toLowerCase()) !== -1)
         || ( student.firstname.toLowerCase().indexOf(args.toLowerCase()) !== -1)
         || ( student.loginname.toLowerCase().indexOf(args.toLowerCase()) !== -1));
    } else {
      return value;
    }
    }
}
