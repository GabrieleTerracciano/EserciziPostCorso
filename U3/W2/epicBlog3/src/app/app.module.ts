import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EvidenceComponent } from './components/evidence/evidence.component';
import { RelatedComponent } from './components/related/related.component';
import { AdviseComponent } from './components/advise/advise.component';


const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'active',
    component: ActivePostsComponent,
  },
  {
    path: 'inactive',
    component: InactivePostsComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    NavbarComponent,
    HomeComponent,
    EvidenceComponent,
    RelatedComponent,
    AdviseComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
