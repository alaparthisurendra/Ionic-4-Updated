import { Pipe, PipeTransform } from '@angular/core';
import { Icontact } from '../interfaces/icontact';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( icontacts: Icontact[], text: string ): Icontact[] {

    if ( text.length === 0 ) { return icontacts; }

    text = text.toLocaleLowerCase();

    return icontacts.filter( icontact => {
      return icontact.name.toLocaleLowerCase().includes(text)
             ;
    });

  }

}
