import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

import { Blogger } from 'src/app/shared/blogger';
import { bloggers } from 'src/app/shared/mock'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  dataSrc!: Blogger[];
  filteredSrc!: Blogger[];

  _searchTerm: string = '';

  constructor(private router: Router, private storageService: StorageService) {
    /* this.dataSrc = bloggers;
    this.filteredSrc = this.dataSrc; */

    this.getBloggers();
  }

  getBloggers() {
    this.dataSrc = this.storageService.getAllBloggers();
    this.filteredSrc = this.dataSrc;
    
    var x = 1;
  }

  addBlogger()  {
    this.router.navigate(['/blogger/add']);
  }

  public set searchTerm(term: string) {
    this._searchTerm = term;
    this.filteredSrc = this.filter(term);
  }

  public get searchTerm(): string {
    return this._searchTerm;
  }

  filter(val: string) {
    return this.dataSrc.filter(x => x.name?.toLowerCase().indexOf(val.toLowerCase()) !== -1
      || x.website?.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }


}
