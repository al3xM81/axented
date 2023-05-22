import { Component } from '@angular/core';
import { faPencil, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogger-challenge';

  faPencil = faPencil;
  faEye = faEye;

}
