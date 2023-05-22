import { Component } from '@angular/core';
import { Blogger } from 'src/app/shared/blogger';

import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  currentBlogger!: Blogger;
  id: string = '';
  name: string = '';
  website: string = '';
  picture_url: string = '';
  email: string = '';

  friendList: string[] = [];
  allBloggers:any = [];

  action: string = 'add';
  blockSaving: boolean = false;

  // regex for valid email
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(private storageService: StorageService, 
              private router: Router, 
              private activatedRouter: ActivatedRoute) {
    if (this.activatedRouter.snapshot.url.length > 0)  {
      let actionRoute = this.activatedRouter.snapshot.url[1].path;

      switch(actionRoute)  {
        case "add": default: 
                    this.action = "add";
                    break;
        case "update": this.action = "edit";
                    this.id = activatedRouter.snapshot.paramMap.get('id') as string;
                    this.getAllBloggers();
                    this.getBlogger(this.id);
                    break;
      }
    }
    else {
      this.router.navigate(['/blogger/favorite']);
    }
  }

  // Save button action
  save()  {
    this.blockSaving = true;

    if (this.action == "add")
      this.createNew();
    else
      this.updateBlogger();
    
    // Return to main page after one second
    setTimeout(() => this.router.navigate(['/blogger/favorites']), 1000);
  }

  // Return to main page
  cancel()  {
    this.router.navigate(['/blogger/favorites']);
  }

  // When update action get blogger data
  getBlogger(id: string)  {
    this.currentBlogger = this.storageService.getBlogger(id);

    if (this.currentBlogger) {
      this.id = this.currentBlogger.id as string;
      this.name = this.currentBlogger.name as string;
      this.website = this.currentBlogger.website as string;
      this.picture_url = this.currentBlogger.picture_url as string;
      this.email = this.currentBlogger.email as string;
      this.friendList = this.currentBlogger.friends;
    }
    else {
      this.router.navigate(['/blogger/add']);
    }
  }

  // Get All bloggers to fill select friends component
  getAllBloggers()  {
    this.allBloggers = this.storageService.getAllBloggers();
    this.allBloggers = this.allBloggers.filter((x: { id: string; }) => x.id != this.id);
  }

  // Create new blogger and add it to storage
  createNew()  {
    let blogger = new Blogger(this.name, this.website, this.picture_url, this.email);

    this.storageService.addBlogger(blogger);
  }

  // Update existing blogger
  updateBlogger()  {
    this.currentBlogger.id = this.id;
    this.currentBlogger.name = this.name;
    this.currentBlogger.website = this.website;
    this.currentBlogger.picture_url = this.picture_url;
    this.currentBlogger.email = this.email;
    this.currentBlogger.friends = this.friendList;

    this.storageService.addBlogger(this.currentBlogger, this.id);
  }
}