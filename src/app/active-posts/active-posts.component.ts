import { Component, OnInit, DoCheck } from '@angular/core';
import { ServiceService } from 'src/service/service.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit, DoCheck {
  posts: Post[] = [];
  newPosts: Post[] = [];
  constructor(private srv: ServiceService) {}

  ngOnInit(): void {
    this.srv.getPosts().then((obj: Post[]) => {
      this.posts = obj;
      console.log(this.posts);
      this.newPosts = this.posts;
    });
  }

  callUpdate(i: number) {
    this.srv.updatePosts(i, this.newPosts);
    // const newPosts = [...this.posts];
    console.log(this.posts);
    this.posts = this.newPosts;
  }

  ngDoCheck(): void {
    console.log('checkkk');
  }

  ngOnChanges(): void {
    console.log('changes', this.posts);
  }

  ngAfterContentInit(): void {
    console.log('afcontentinit', this.posts);
  }
}
