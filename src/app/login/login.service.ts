import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://103.24.125.153/ecommerce_services/';
  postRegistationData$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  postLoginData$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private toster: ToastrService) { }
  // tslint:disable-next-line:typedef
  postRegistration(query: any) {
    // const body = {id: Number(registationId)};
    const url = this.baseUrl + 'admin/customers/quickRegistration';
    this.http.post(url , query).subscribe((res: any) => {
      if (res != null){
        this.postRegistationData$.next(res.data as any[]);
        this.toster.success('you Register is Successfully', 'success');
      }else{
        this.postRegistationData$.next(null);
      }
    }, (error) => {
      console.log(error);
      this.toster.error('plz check once field', 'error');
  });
  }
  loadPostRegistationForm(): Observable<any[]>{
    return this.postRegistationData$.asObservable();
  }
  // tslint:disable-next-line:typedef
  postLogin(query: any) {
    // const body = {id: Number(registationId)};
    const url = this.baseUrl + 'admin/customers/login';
    this.http.post(url , query).subscribe((res: any) => {
      if (res != null){
        this.postLoginData$.next(res.data as any[]);
        this.toster.success('you are successfully logged in', 'success');
      // tslint:disable-next-line:align
      this.router.navigate(['/home'], { relativeTo: this.route});
      }else{
        this.postLoginData$.next(null);
        this.toster.error('Wrong Email or Password', 'error');
      }
    }, (error) => {
      console.log(error);
      this.toster.error('Wrong Email or Password', 'error');
  });
  }
    loadPostlogin(): Observable<any[]>{
      return this.postLoginData$.asObservable();
    }
  // tslint:disable-next-line:typedef
  forgetPassword(query: any): Observable<any>{
   const url = this.baseUrl + 'admin​/customers​/forgotPassword';
   return this.http.post(url, query).pipe(catchError(this.handleError));
  }
  // tslint:disable-next-line:typedef
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error.msg;
    }
    return throwError(errorMessage);
  }
}
