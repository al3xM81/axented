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
  friends: string = '';

  constructor(router: Router, activatedRouter: ActivatedRoute,
            private storageService: StorageService)  {
    let id = activatedRouter.snapshot.paramMap.get('id') as string;

    this.getBlogger(id);
  }

  getBlogger(id: string)  {
    this.blogger = this.storageService.getBlogger(id);

    if (this.blogger.friends.length > 0) {
      this.friends = this.blogger.friendNames.join(", ");
    }
  }
}
