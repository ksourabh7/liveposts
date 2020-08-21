import {Injectable} from '@angular/core';
import { PostService } from './post.service';
import { Post} from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class DataStorageService {
    
    constructor(private postService: PostService, private httpService: HttpClient) {

    }


    fetchData() {
      this.httpService.get('https://live-posts-89c93.firebaseio.com/posts.json')
      .pipe(
           tap((listofPosts: Post[]) => {
                this,this.postService.setPosts(listofPosts);
           })
      ).subscribe();
        


    }

    storeData() {
      // get data from post.service
      const listofPosts: Post[]= this.postService.getPosts();



      //Store the data in DB
      this.httpService.put('https://live-posts-89c93.firebaseio.com/posts.json', listofPosts
      ).subscribe((res)=>{
        console.log(res);
      });

    }
}