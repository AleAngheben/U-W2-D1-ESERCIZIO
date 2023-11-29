import { Injectable } from '@angular/core';

import { Post } from 'src/app/models/post';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  [x: string]: any;
  posts: Post[] = [];
  constructor() {}

  async getPosts() {
    const result = await (await fetch('../../assets/db.json')).json();
    return result;
  }

  async updatePosts(postIndex: number, post: any) {
    post[postIndex].active = !post[postIndex].active;
  }
}
