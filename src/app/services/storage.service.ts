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
    let item = localStorage.getItem(key);

    if (item) {
      let blogger = JSON.parse(item);

      if (blogger)  {
        let friendNames = this.getFriendList(blogger.friends);
        blogger.friendNames = friendNames;

        return blogger;
      }
    }

    return null;
  }

  public getAllBloggers() {
    let storageData: any = [];

    console.log("local storage");

    if (localStorage.length > 0)  {
      for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);

        if (key)  {
          let data = localStorage.getItem(key);
          let blogger = JSON.parse(data as string) as Blogger;

          if (blogger)  {
            let friendNames = this.getFriendList(blogger.friends);
            blogger.friendNames = friendNames;

            storageData.push(blogger);
          }
        }
      }
    }

    //console.log(storageData);
    return storageData;
  }

  private getFriendList(list: string[])  {
    let friends: string[] = [];

    list.forEach(
      f => {
        let friend = this.getBlogger(f);

        if (friend)
          friends.push(friend.name);
      }
    );

    return friends;
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
