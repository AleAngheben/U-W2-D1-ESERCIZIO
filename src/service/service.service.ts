import { Injectable } from '@angular/core';

import { Post } from 'src/app/models/post';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  posts: Post[] = [];
  constructor() {}

  async getPosts() {
    const result = await (await fetch('../../assets/db.json')).json();
    this.posts = result;
    return result;
  }

  async updatePosts(postIndex: number) {
    this.posts[postIndex].active = !this.posts[postIndex].active;
  }

  // newPosts() {
  //   const updatePost = this.posts;
  //   return updatePost;
  // }
}
