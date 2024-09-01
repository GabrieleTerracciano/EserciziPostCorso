import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  posts: Post[] = [];

  constructor() {
    this.getInactivePosts().then((data) => {
      this.posts = data;
    }).catch(error => {
      console.error('Error fetching inactive posts:', error);
    });
  }

  async getInactivePosts(): Promise<Post[]> {
    try {
      const response = await fetch('/assets/db.json');
      if (!response.ok) {
        throw new Error('Failed to fetch posts data');
      }
      const data = await response.json() as Post[];
      return data.filter(post => !post.active);
    } catch (error) {
      console.error('Error fetching inactive posts:', error);
      return [];
    }
  }
}
