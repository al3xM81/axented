import { Injectable } from '@angular/core';
import { Blogger } from '../shared/blogger';
import { bloggers } from '../shared/mock';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageData: Blogger[] = [];

  constructor() {
    localStorage.clear();
    this.storageData = [];

    if (localStorage.length == 0) {
      console.log("Init storage set");
      bloggers.forEach(item => this.addBlogger(item, item.id));
    }
  }

  public addBlogger(data: any, key?: string)  {
    if (!key) {
      let newId = this.getMaxStorageKey();
      data.id = newId.toString();;
      
      console.log("New id = " + data.id);
    }

    localStorage.setItem(data.id, JSON.stringify(data));
  }

  public getBlogger(key: string) {
    return localStorage.getItem(key);
  }

  public getAllBloggers() {
    let storageData = [];

    console.log("local storage");

    if (localStorage.length > 0)  {
      for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);

        if (key)  {
          let data = localStorage.getItem(key);

          storageData.push(JSON.parse(data as string));
        }        
      }
    }

    console.log(storageData);
    return storageData;
  }

  private getMaxStorageKey() {
    let keys = [];

    if (localStorage.length > 0)  {
      for (let index = 0; index < localStorage.length; index++) {
        let key = localStorage.key(index);
      
        if (key)  {
          keys.push(parseInt(key));
        }
      }
    }

    if (keys.length)
      return 1 + Math.max(...keys);

    return 1;
  }
}
