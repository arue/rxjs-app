import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
    
    constructor(private http: HttpClient) { }
  
    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>("http://localhost:3000/posts");
    }

}
export interface Post {
    id:  string;
    title: string;
    author:  string;
  }