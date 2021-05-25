import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MyaccountService {
  // tslint:disable-next-line:variable-name
  base_url = "http://103.24.125.153/ecommerce_services/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  addressData$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadAccountData$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  addressDats$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadToGetData: any;
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  postToChangePassword(query: any) {
    // const body = {id: Number(registationId)};
    const url = this.base_url + 'admin​/customers​/changePassword';
    this.http.post(url, query).subscribe(
      (res: any) => {
        if (res != null) {
          this.loadAccountData$.next(res.data as any[]);
          localStorage.setItem('changePassword', res);
        } else {
          this.loadAccountData$.next(null);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadToChangePassword(): Observable<any[]> {
    return this.loadAccountData$.asObservable();
  }
  // tslint:disable-next-line:typedef
  getAccountData(body: any): Observable<any> {
    const url = this.base_url + 'admin/customers/getCustomerById/' + body;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }
  putData(id: any, query: any): Observable<any> {
    const url = this.base_url + 'admin/customers';
    return this.http.put<any>(url, query).pipe(catchError(this.handleError));
  }
  // getAccountAddress(id: any): Observable<any>{
  //   const url = this.base_url + '​/admin​/address​/getAddressById​/' +  id;
  //   return this.http.get<any>(url).pipe(catchError(this.handleError));
  // }
  get_Address(userId: any): Observable<any> {
    const url = this.base_url+"/admin/address/" + userId;
    console.log(url);
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }
  // loadToGetData(): Observable<any[]>{
  //   return this.addressData$.asObservable();
  // }

  // dataofAddress = [];
  // tslint:disable-next-line:typedef
  //  getDataForAddress(getId: any){
  //     //   const body = {
  //     //   storeId: Number(getId),
  //     // };
  //    const url = this.base_url + 'admin/address/' + getId;
  //    this.http.get<any>(url).subscribe((res: any) => {
  //      if (res != null){
  //        this.dataofAddress.length = 0;
  //        for(let key in res['data']){
  //          this.dataofAddress.push(res.data[key])
  //        }
  //        console.log(this.dataofAddress);
  //        this.addressData$.next(res.data as any[]);
  //       //  this.addressData$.next(res.data as any[])
  //    }else{
  //      this.addressData$.next(null);
  //   }
  //  });
  // }
  addNewAddress(query: any) {
    // const body = {id: Number(registationId)};
    const url = this.base_url + 'admin/address';
    this.http.post(url, query).subscribe(
      (res: any) => {
        if (res != null) {
          this.addressDats$.next(res.data as any[]);
        } else {
          this.loadAccountData$.next(null);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  putAddress(id: any, query: any): Observable<any> {
    const url = this.base_url + '/admin/address/';
    return this.http.put<any>(url, query).pipe(catchError(this.handleError));
  }
  // loadPostlogin(): Observable<any[]>{
  //   return this.loadAccountData$.asObservable();
  // }
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
