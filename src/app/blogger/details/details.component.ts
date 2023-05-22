import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Blogger } from 'src/app/shared/blogger';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  blogger!: Blogger;
  name: string = '';
  website: string = '';
  email: string = '';
  friends: string = '';

  blogger_picture: string = '../../assets/default-user.png';

  constructor(private router: Router, activatedRouter: ActivatedRoute,
            private storageService: StorageService)  {
    let id = activatedRouter.snapshot.paramMap.get('id') as string;

    this.getBlogger(id);
  }

  // Get Blogger info
  getBlogger(id: string)  {
    let blogger: Blogger = this.storageService.getBlogger(id);

    if (blogger) {
      this.name = blogger.name as string;
      this.website = blogger.website as string;
      this.email = blogger.email as string;
      this.blogger_picture = blogger.picture_url as string;

      // Fill blogger friends
      if (blogger.friends.length > 0)
        this.friends = blogger.friendNames.join(", ");
    }
    else {
      this.router.navigate(['/blogger/favorites']);
    }
  }

  // Rerturn to main list
  return()  {
    this.router.navigate(['/blogger/favorites']);
  }
}
