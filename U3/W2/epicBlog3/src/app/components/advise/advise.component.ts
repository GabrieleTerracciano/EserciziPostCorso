import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-advise',
  templateUrl: './advise.component.html',
  styleUrls: ['./advise.component.scss'],
})
export class AdviseComponent {
  posts: Post[] = [];
  advised: Post[] = [];
  included: number[] = [];

  constructor() {
    this.loadPosts();
  }

  async loadPosts() {
    try {
      const response = await fetch('assets/db.json');
      const data: Post[] = await response.json();
      this.posts = data;
      this.buildIndex();
      this.advisePosts();
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  }

  buildIndex() {
    this.included = [];

    while (this.included.length < 4) {
      const index = Math.floor(Math.random() * this.posts.length);
      if (!this.included.includes(index)) {
        this.included.push(index);
      }
    }
  }

  advisePosts() {
    this.advised = this.included.map(index => this.posts[index]);
  }
}
