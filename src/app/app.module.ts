import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSectionComponent } from './homepagemanagement/menu-section/menu-section.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './homepagemanagement/BannerSection/banner/banner.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CategoriesComponent } from './homepagemanagement/categories/categories.component';
import { Bannertype2Component } from './homepagemanagement/BannerSection/bannertype2/bannertype2.component';
import { BucketoneComponent } from './homepagemanagement/Bucketsection/bucketone/bucketone.component';
import { BuckettwoComponent } from './homepagemanagement/Bucketsection/buckettwo/buckettwo.component';
import { AllbucketsComponent } from './homepagemanagement/Bucketsection/allbuckets/allbuckets.component';
import { HomepageComponent } from './homepagemanagement/homepage/homepage.component';
import {ToastrModule} from 'ngx-toastr';
import { MyAccountComponent } from './my-account/my-account.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuSectionComponent,
    BannerComponent,
    CategoriesComponent,
    Bannertype2Component,
    BucketoneComponent,
    BuckettwoComponent,
    AllbucketsComponent,
    HomepageComponent,
    MyAccountComponent,
    LoginComponent,
    ForgetPasswordComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
