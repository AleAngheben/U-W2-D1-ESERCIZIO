import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { ServiceService } from 'src/service/service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private serv: ServiceService) {
    this.serv.getPosts().then((obj: any) => {
      // obj.forEach((e: any) => {
      //   if (e.active) {
      //     this.post.push(e);
      //   }
      // });
      this.posts = obj;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
