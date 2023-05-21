import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  name: string = '';
  website: string = '';
  picture_url: string = '';
  email: string = '';

  // regex for valid email
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor() {

  }

  save()  {
    console.log("saving..");
  }
}
