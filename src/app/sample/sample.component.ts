import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  frm: FormGroup;
  user: any;
  showInputErrors: boolean;
  isbusy: boolean;
  hasFailed: boolean;

  constructor(public formbuilder: FormBuilder,private router: Router) {
    this.frm = formbuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
   }

  ngOnInit() {
  }

  public doSignIn() {
    // validate form
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }
    // reset status
    this.isbusy = true;
    this.hasFailed = false;

    const username = this.frm.get("username").value;
    const password = this.frm.get("password").value;
    console.log(username, password);
    this.user = {
      username: username,
      password: password
    };

    // this.userService.getUser(this.user).subscribe(response => {
    //   // this.userAuth.doSignIn(response.token,response.name)
    //   console.log("lwngth",response.length);

    //   this.user = response;
    //   if ((response.length > 0)) {
    //     // console.log('yeah!', this.user[0]);
    //     localStorage.setItem("user", JSON.stringify(this.user[0]));
    //     this.router.navigate(["/postlist"]);
    //   }
    //   // this.router.navigate(['/postlist']);
    // });
  }


}
