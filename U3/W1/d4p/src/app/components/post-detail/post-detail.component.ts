import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  postId!: number;
  post: Post | null = null;

  constructor(private route: ActivatedRoute) {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPost().then((data) => {
      this.post = data;
    }).catch(error => {
      console.error('Error fetching post:', error);
    });
  }

  async getPost(): Promise<Post | null> {
    try {
      const response = await fetch('/assets/db.json');
      if (!response.ok) {
        throw new Error('Failed to fetch post data');
      }
      const data = await response.json() as Post[];
      const post = data.find(post => post.id === this.postId);
      if (!post) {
        throw new Error('Post not found');
      }
      return post;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }
}
