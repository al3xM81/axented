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

  // regex for valid email
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(private storageService: StorageService, 
              private router: Router, 
              private activatedRouter: ActivatedRoute) {
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

  save()  {
    if (this.action == "add")
      this.createNew();
    else
      this.updateBlogger();
    
    // Return to main page after two seconds
    setTimeout(() => this.router.navigate(['/blogger/favorites']), 2000);
  }

  cancel()  {
    this.router.navigate(['/blogger/favorites']);
  }

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
  }

  getAllBloggers()  {
    this.allBloggers = this.storageService.getAllBloggers();
  }

  createNew()  {
    console.log("saving..");
    let blogger = new Blogger(this.name, this.website, this.picture_url, this.email);

    this.storageService.addBlogger(blogger);
  }

  updateBlogger()  {
    console.log("Update data");

    this.currentBlogger.id = this.id;
    this.currentBlogger.name = this.name;
    this.currentBlogger.website = this.website;
    this.currentBlogger.picture_url = this.picture_url;
    this.currentBlogger.email = this.email;
    this.currentBlogger.friends = this.friendList;

    console.log(this.currentBlogger);

    this.storageService.addBlogger(this.currentBlogger, this.id);
  }
}
