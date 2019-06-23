import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../providers/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
RecentPosts = [];
featuredPost;
popular=[];
  constructor(private service: MainServiceService, private router: Router) {
    this.getFeaturedPost();
    this. getRecent();
    this. getPopularPost();
   }

  ngOnInit() {
  }
  
  getRecent(){
    this.service.getRecent().subscribe((response)=>{
      this.RecentPosts = response['data'];
      console.log(this.RecentPosts);
      
    })
  }

  getFeaturedPost(){
    this.service.getSinglePost().subscribe((response)=>{
      this.featuredPost = response['data'];
      console.log(this.featuredPost);
      
    })
  }

  getPopularPost()
  {
    this.service.getPopularPost().subscribe((Response)=>{
      this.popular = Response['data'];
      console.log(this.popular);
      
    })
  }

  navigateAllPost(){
    this.router.navigate(['/list-of-all-posts']);
  }

  readMore(postid){
    this.router.navigate(['/single-post/'+ postid])
  }

}
