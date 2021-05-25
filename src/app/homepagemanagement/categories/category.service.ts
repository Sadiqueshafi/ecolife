import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  base_url = 'http://103.24.125.153/';

  listofcategories$: BehaviorSubject<any[]> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  get_listof_categories() {
    const url = this.base_url + 'ecommerce_services/admin/categories';
    this.httpClient.get(url).subscribe(
      (response: any) => {
        this.listofcategories$.next(response.data as any[]);
       // console.log(response.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loaddata(): Observable<any[]> {
    return this.listofcategories$.asObservable();
  }

  
}
