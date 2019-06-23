import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse,HttpHeaders, HttpParams } from  '@angular/common/http'
;
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  baseUrl = "http://sixslatekays.com/dashboardksi/api"
  constructor(private http:HttpClient, private router: Router) { }


  contactUs(Message):Observable<any>{
  
   return this.http.post(`${this.baseUrl}/contactUs`,{data:Message}).pipe(map((response)=>{
    return response
      
    }))

  }


  Comment(comment):Observable<any>{
    console.log(comment)
     return this.http.post(`${this.baseUrl}/storeComments`,{data:comment}).pipe(map((response)=>{
        console.log(response);
        return response
      }))
  
    }

    getSinglePost():Observable<any>{
      return this.http.get(`${this.baseUrl}/getFeaturedPost`).pipe(map((response)=>{
        return response;
      }))
      
    }

    getAllBlogPosts():Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllBlogPosts`).pipe(map((response)=>{
      return response;
    }))
    }

getPopularPost():Observable<any>{
  return this.http.get(`${this.baseUrl}/getPopularPost`).pipe(map((response)=>{
    return response;
  }))

}


getRecent():Observable<any>{
  return this.http.get(`${this.baseUrl}/getRecentPosts`).pipe(map((response)=>{
    return response;
  }))

}

fetchPostComments(postid):Observable<any>{
  console.log(postid);
  const  params = new  HttpParams().set('postid', postid.toString());

  return this.http.get(`${this.baseUrl}/fetchPostComments`, {params:params}).pipe(map(response=>{
  console.log(response);
  
    return response['data'];
  }))

}
  
}
