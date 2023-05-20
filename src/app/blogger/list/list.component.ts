import { Component } from '@angular/core';

import { Blogger } from 'src/app/shared/blogger';
import { bloggers } from 'src/app/shared/mock'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  dataSrc!: Blogger[];

  constructor() {
    this.dataSrc = bloggers;
  }

}
