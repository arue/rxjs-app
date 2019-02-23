import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../post-service';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private postService: PostService){}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
