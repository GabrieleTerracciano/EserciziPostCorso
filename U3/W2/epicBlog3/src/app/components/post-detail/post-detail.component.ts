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
    this.loadPost();
  }

  async loadPost() {
    const response = await fetch('/assets/db.json');
    const data = await response.json() as Post[];
    this.post = data.find(post => post.id === this.postId) || null;
  }
}
