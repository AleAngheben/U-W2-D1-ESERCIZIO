import { Component, OnInit, OnChanges } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private srv: ServiceService) {}

  ngOnInit(): void {
    this.srv.getPosts().then((obj: any) => {
      this.posts = obj;
      console.log(this.posts);
    });
  }

  callUpdate(i: number) {
    this.srv.updatePosts(i, this.posts);
  }
}
