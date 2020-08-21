import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Post} from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  index: number;

  constructor(private postServce: PostService,
     private routerService: Router,
     private routeService: ActivatedRoute
     ) { }

  ngOnInit(): void {

    let title='';
    let desc='';
    let imagePath='';

    this.routeService.params.subscribe((params: Params)=>{
      this.index=params['index'];
    if (this.index) {
      const ob: Post =this.postServce.getPost(this.index);
      title = ob.title;
      desc = ob.desc;
      imagePath = ob.imagePath;
    }
  });


    this.postForm = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      desc: new FormControl(desc, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required])
    });
  }

  onSubmit() {
    
    // create Object
    const post: Post = new Post(
      this.postForm.value.title,
      this.postForm.value.desc,
      this.postForm.value.imagePath,
      'test@tst.com',
      new Date()
    );

    console.log(post);

    if (this.index) {
      this.postServce.updatePost(post,this.index);
    } else { 
    // Add post object to post.service
      this.postServce.addPosts(post);
    }

    //Navigate
    this.routerService.navigate(['post-list']);
  }



}
