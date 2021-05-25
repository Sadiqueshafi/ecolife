
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: any| FormGroup;
  loading = false;
  submitted = false;
  login = true;
  registation = false;
  loginForm: any | FormGroup;
  constructor(private formBuilder: FormBuilder,
              private registationService: LoginService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customerFirstName: ['', Validators.required],
      customerLastName: ['', Validators.required],
      customerMobileNo: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerAlternateMobileNo: ['', Validators.required],
      customerAlternateEmail: ['', Validators.required],
      customerNotes: ['', [Validators.required]]
    });
    this.loginForm = this.formBuilder.group({
      customerEmail: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
   // tslint:disable-next-line:typedef
   get f() { return this.form.controls; }
   // tslint:disable-next-line:typedef
   onSubmit(){
     this.registationService.postRegistration(this.form.value);
   }
   // tslint:disable-next-line:typedef
   loginSubmit(){
    this.submitted = true;
    if (this.loginForm.value != null ) {
      this.registationService.postLogin(this.loginForm.value);
      this.router.navigate(['/home'], { relativeTo: this.route });
      this.loading = true;
    }else{
      console.log('error');
    }
   }
   // tslint:disable-next-line:typedef
   loginPage(){
     this.login = true;
     this.registation = false;
   }
   // tslint:disable-next-line:typedef
   registrationPage(){
    this.login = false;
    this.registation = true;
   }
}
