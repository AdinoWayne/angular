import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError, NotFoundError } from '../common/app-error-handle';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  post: any[];
  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.post.splice(0, 0, post);
    input.value ='';
    this.service.create(post)
    .subscribe(newPost => {
      post['id'] = newPost.id;
    }, (error: AppError) => {
      this.post.splice(0, 1)

    })
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(res => {
      console.log(res)
    })
  }

  deletePost(el) {
    let index = this.post.indexOf(el);
    this.post.splice(index, 1);
    this.service.delete(el)
    .subscribe(null, (error: AppError) => {
      this.post.splice(index, 0, el)
      if (error instanceof NotFoundError)
        alert('this post has already been deleted. ')
    })
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(res => { this.post = res }, (err: Response) => {
      if (err.status === 404){
        alert('This post has already been deleted')
      } else {
        alert('An Unexpected error occurred.')
      }
    })
  }

}
