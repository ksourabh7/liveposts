import { Component, OnInit } from '@angular/core';
import { Post} from '../post.model';
import { PostService} from '../post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listofPosts: Post[]=[];
  
  constructor(private postService: PostService ) { }

  ngOnInit(): void {
    this.postService.listChanged.subscribe((listofPosts: Post[]) =>{
      this.listofPosts = listofPosts;
    })
    this.listofPosts =  this.postService.getPosts()
  }
  deletePost(index:number){
    this.listofPosts.splice(index,1);

  }

}
