import { Component, OnInit, Inject } from '@angular/core';
import { PostService, Post } from './post-service';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-app';
  posts: Observable<Post[]>;

  constructor(private postService: PostService){}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
