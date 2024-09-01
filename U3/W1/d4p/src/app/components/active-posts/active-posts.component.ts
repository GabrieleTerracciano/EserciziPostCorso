import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  posts: Post[] = [];

  constructor() {
    this.getActivePosts().then((data) => {
      this.posts = data;
    }).catch(error => {
      console.error('Error fetching active posts:', error);
    });
  }

  async getActivePosts(): Promise<Post[]> {
    try {
      const response = await fetch('/assets/db.json');
      if (!response.ok) {
        throw new Error('Failed to fetch posts data');
      }
      const data = await response.json() as Post[];
      return data.filter(post => post.active);
    } catch (error) {
      console.error('Error fetching active posts:', error);
      return [];
    }
  }
}
