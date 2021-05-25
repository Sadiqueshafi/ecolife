import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword: any|FormGroup;
  constructor( private router: Router, private route: ActivatedRoute, private http: LoginService, private fb: FormBuilder,
               private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.forgetPassword = this.fb.group({
      userEmail: ['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit(email: any){
    this.http.forgetPassword(email).subscribe((res) => {
      if (res != null){
        console.log(res);
        this.router.navigate(['/login'], { relativeTo: this.route });
        this.toastr.success('Password has Send to your Email Address!', 'Toastr fun!');
      }else{
        console.log('email is not match');
        this.toastr.success('Email Address is not match', 'Error');
      }
    });
  }
  // tslint:disable-next-line:typedef
  backToLoin(){
    this.router.navigate(['/login'], { relativeTo: this.route });
  }
}
