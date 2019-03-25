import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  post: any[];
  constructor(private service: PostService) {
    this.service.getPosts()
    .subscribe(response => {
      this.post = response.json()
    })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value ='';
    this.service.createPosts(post)
    .subscribe(res => {
      post['id'] = res.json().id;
      this.post.splice(0, 0, post)
    })
  }

  updatePost(post) {
    this.service.updatePosts(post)
    .subscribe(res => {
      console.log(res.json())
    })
  }

  deletePost(el) {
    this.service.deletePosts(el)
    .subscribe(() => {
      let index = this.post.indexOf(el);
      this.post.splice(index, 1);
    })
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(res => {
      this.post = res.json();
    }, (err: Response) => {
      if (err.status === 404){
        alert('This post has already been deleted')
      } else {
        alert('An Unexpected error occurred.');
        console.log(err);
      }
    })
  }

}
