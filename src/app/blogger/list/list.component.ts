import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

import { Blogger } from 'src/app/shared/blogger';

// Icons
import { faPencil, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  dataSrc!: Blogger[];
  filteredSrc!: Blogger[];

  icon_edit: any;
  icon_view: any;

  _searchTerm: string = '';

  constructor(private router: Router, private storageService: StorageService) {
    this.getBloggers();

    // Set action icons
    this.icon_edit = faPencil;
    this.icon_view = faEye;
  }

  // Search action
  searchBloggers()  {
    this.filteredSrc = this.filter(this._searchTerm);
  }

  // Get All bloggers to fill table, display all
  getBloggers() {
    this.dataSrc = this.storageService.getAllBloggers();
    this.filteredSrc = this.dataSrc;
  }

  // Open add new blogger form
  addBlogger()  {
    this.router.navigate(['/blogger/add']);
  }

  public set searchTerm(term: string) {
    this._searchTerm = term;

    if (this._searchTerm.trim() === "")
      this.filteredSrc = this.dataSrc;
  }

  public get searchTerm(): string {
    return this._searchTerm;
  }

  // Simulate searching by filter blogger list based on name or website
  filter(val: string) {
    return this.dataSrc.filter(x => x.name?.toLowerCase().indexOf(val.toLowerCase()) !== -1
      || x.website?.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }
}
