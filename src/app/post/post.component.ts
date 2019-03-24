import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  post: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    http.get(this.url)
    .subscribe(response => {
      this.post = response.json()
    })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value ='';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(res => {
      post['id'] = res.json().id;
      this.post.splice(0, 0, post)
    })
  }

  ngOnInit() {
  }

}
