import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { SlidersComponent } from './sliders/sliders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SinglePostDetailComponent } from './single-post-detail/single-post-detail.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { paginationService } from './providers/pagination.service';

 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
const config:SwiperConfigInterface={
  direction: 'horizontal',
  slidesPerView: 'auto'
}
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "sample", component: SampleComponent },
  { path: "single-post/:postid", component: SinglePostDetailComponent },
  { path: "list-of-all-posts", component: AllPostsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SlidersComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    SamplePageComponent,
    FooterComponent,
    SinglePostDetailComponent,
    AllPostsComponent,
    // SwiperModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(), 
    RouterModule.forRoot(routes, { useHash: true })
  ],
  // schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpClientModule,{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }, paginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
