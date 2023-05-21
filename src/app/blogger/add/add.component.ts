import { Component } from '@angular/core';
import { Blogger } from 'src/app/shared/blogger';

import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

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

  constructor(private storageService: StorageService, private router: Router) {

  }

  save()  {
    console.log("saving..");
    let blogger = new Blogger(this.name, this.website, this.picture_url, this.email);

    this.storageService.addBlogger(blogger);

    // Return to main page after two seconds
    setTimeout(() => this.router.navigate(['/blogger/favorites']), 2000);
  }
}
