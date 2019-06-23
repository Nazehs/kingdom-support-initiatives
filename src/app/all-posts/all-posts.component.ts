import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../providers/main-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { paginationService } from '../providers/pagination.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  RecentPosts = [];
  featuredPost;
  popular=[];
  pager: any;
  pagedItems: any;
  allItems: any;
    constructor(private service: MainServiceService, private router: Router, private pagination: paginationService) {
      this.getFeaturedPost();
      this. getRecent();
      this. getPopularPost();
     }
  
    ngOnInit() {
    }
    
    getRecent(){
      this.service.getRecent().subscribe((response)=>{
        // this.RecentPosts = response['data'];
        console.log(this.RecentPosts);
        this.allItems = response['data'];
        console.log(this.allItems);
        // initialize to page 1
        this.setPage(1);
        
      })
    }
  
    setPage(page: number) {
      // get pager object from service
      this.pager = this.pagination.getPager(this.allItems.length, page);
  
      // get current page of items
      this.pagedItems = this.allItems.slice(
        this.pager.startIndex,
        this.pager.endIndex + 1
      );
      console.log(this.pager);
      
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
