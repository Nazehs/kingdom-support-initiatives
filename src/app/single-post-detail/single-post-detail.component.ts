import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../providers/main-service.service';
import { FormBuilder, FormGroup, ValidationErrors, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post-detail',
  templateUrl: './single-post-detail.component.html',
  styleUrls: ['./single-post-detail.component.scss']
})
export class SinglePostDetailComponent implements OnInit {
  frm:FormGroup;
  submitted= false;
  public hasFailed = false;
  public showInputErrors = false;
  public isbusy = false;
  successMessage: string;
  errorMessage: string;
  allPosts: any;
  post;
  postid;
  allComments =[]
commentCounter;
  postcomment ={
    postid:null
  }

  constructor(private service: MainServiceService, private form:FormBuilder , private routes:ActivatedRoute) {
  this.postid = this.routes.snapshot.paramMap.get('postid');
    this.service.getAllBlogPosts().subscribe((response)=>{
      this.allPosts = response['data'];
      console.log(this.allPosts);
      for(let item of this.allPosts){
        if(item.postid == this.postid){
          this.post = item
        }
      }
      console.log(this.post);
      
      
    })
    this.frm = form.group({
      name:["", Validators.required],
      comment:["", Validators.required],
      email:new FormControl('',Validators.compose([Validators.required, Validators.email])),
      organisation:[""]
      
    });

    // fetching comments
    this.getAllPostComments();
   }

  ngOnInit() {
  }



  public shareComments() {
    // validate form
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }
    // reset status
    this.isbusy = true;
    this.hasFailed = false;
  
    const name = this.frm.get("name").value;
    const usercomment = this.frm.get("comment").value;
    // const email = this.frm.get("email").value;
    const email = this.frm.get("email").value;
    const organisation = this.frm.get("organisation").value;
    // const message = this.frm.get("message").value;
    
    const  comments ={
      name:name,
      email:email,
      comment:usercomment,
      organisation:organisation,
      postid:this.postid,
      commentid: Date.now()
     }
    console.log(comments);
    
  
    this.service.Comment(comments).subscribe((response)=>{
      console.log('enter')
      if(response['data']){
        // this.frm.reset(this.frm.value);
        this.frm.reset();
        this.isbusy=false;
      this.successMessage ='Message was send succssfully and we will contact you ASAP';
  
      setTimeout(()=>{
        this.successMessage = '';
      }, 5000)
  
      }else{
        this.errorMessage="Ooops! There was a problem sending your message. Pls ttry again!!"
        this.isbusy=false;
        
      setTimeout(()=>{
        this.errorMessage = '';
      }, 5000)
      }
      console.log(response);
    })
  }


  getAllPostComments(){
    this.postcomment.postid = this.postid
  this.service.fetchPostComments(this.postid).subscribe(response=>{
    this.allComments = response;
    this.commentCounter =  this.allComments.length;
    console.log('comment',this.allComments)
  })
  }
  

}
