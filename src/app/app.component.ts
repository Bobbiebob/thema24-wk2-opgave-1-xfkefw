import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Welkom, {{studentnaam}}.</p>
    <p>Aantal uren gestudeerd: <span [textContent]="studietijd"></span></p>
    <p>Aantal uren gelanterfanterd: <span [textContent]="lanterfantertijd"></span></p>
    <p>Dagen tot aan de volgende vakantie: <b>{{ 365 - studiedagen }}</b></p>
    <img [src]="employeeOfTheWeek.picture">
`,
styles: [` p { font-family:Calibri,Verdana,sans-serif; font-size:1.2rem; } `],
})

export class AppComponent  {
  studentnaam = 'Henk de Boer';
  studietijd = 18;
  lanterfantertijd = (24 - this.studietijd);
  studiedagen = Math.round((this.studietijd+this.lanterfantertijd)/24);
  employeeOfTheWeek = {'picture': ""}
}
