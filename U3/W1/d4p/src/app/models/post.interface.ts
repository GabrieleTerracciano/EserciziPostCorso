export interface Post {
  id: number;
  title: string;
  body: string;
  active: boolean;
  tags: string[];
  reaction: number;
}
