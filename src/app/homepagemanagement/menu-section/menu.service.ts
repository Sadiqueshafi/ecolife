import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // tslint:disable-next-line:variable-name
  base_url = 'http://103.24.125.153/';
  response: any;
  Listofdata$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  Listofstoredata$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadtopbanner$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadbannertype2$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadbannertype3$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadbuckets$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadbucketproducts$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadbucketproducts_1$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadbucketproducts_2$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  loadbucketproducts_3$: BehaviorSubject<any[]> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}
  // tslint:disable-next-line:typedef
  get_listofdata() {
    const url = this.base_url + 'ecommerce_services/admin/categories';
    this.httpClient.get(url).subscribe(
      (response: any) => {
        this.Listofdata$.next(response.data.slice(0, 9) as any[]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loaddata(): Observable<any[]> {
    return this.Listofdata$.asObservable();
  }

  get_list_of_Stores() {
    const url = this.base_url + 'ecommerce_services/admin/store';
    this.httpClient.get(url).subscribe(
      (response: any) => {
        this.Listofstoredata$.next(response.data as any[]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_stores(): Observable<any[]> {
    return this.Listofstoredata$.asObservable();
  }

  get_top_banner(storeid: any) {
    const body = {
      storeId: Number(storeid),
      bannerType: 1,
    };
    const url =
      this.base_url + 'ecommerce_services/admin/banner/getBannerByBannerType';
    this.httpClient.post(url, body).subscribe(
      (response: any) => {
        this.loadtopbanner$.next(response.data as any[]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_topbanner(): Observable<any[]> {
    return this.loadtopbanner$.asObservable();
  }




  get_banner_type2(storeid: any) {
    const body = {
      storeId: Number(storeid),
      bannerType: 2,
    };
    console.log(body);
    const url =
      this.base_url + 'ecommerce_services/admin/banner/getBannerByBannerType';
    this.httpClient.post(url, body).subscribe(
      (response: any) => {
        // console.log(response);
        if (response != null) {
          this.loadbannertype2$.next(response.data as any[]);
        } else {
          this.loadbannertype2$.next(null);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_banner_type2(): Observable<any[]> {
    return this.loadbannertype2$.asObservable();
  }


  get_banner_type3(storeid: any) {
    const body = {
      storeId: Number(storeid),
      bannerType: 3,
    };
    console.log(body);
    const url =
      this.base_url + 'ecommerce_services/admin/banner/getBannerByBannerType';
    this.httpClient.post(url, body).subscribe(
      (response: any) => {
        // console.log(response);
        if (response != null) {
          this.loadbannertype3$.next(response.data as any[]);
        } else {
          this.loadbannertype3$.next(null);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_banner_type3(): Observable<any[]> {
    return this.loadbannertype3$.asObservable();
  }




  get_buckets(storeid: any) {
    const url =
      this.base_url +
      'ecommerce_services/admin/bucket/getBucketsByStoreId/' +
      storeid;
    this.httpClient.get(url).subscribe(
      (response: any) => {
        // console.log(response);
        if (response != null) {
          // const filteredbucket = response.data.filter(
          //   (item) => item.displayOrder === displayorder
          // );
          // console.log('filter after data');
          // console.log(filteredbucket);
          this.loadbuckets$.next(response.data as any[]);
        } else {
          this.loadbuckets$.next(null);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_backets(): Observable<any[]> {
    return this.loadbuckets$.asObservable();
  }

  listofproductdetails = [];
  get_bucket_products(bucketid: any) {
    const body = {
      id: Number(bucketid),
      type: 'bucket',
    };
    console.log(bucketid);
    const url = this.base_url + 'ecommerce_services/admin/product/getProductByType/';
    this.httpClient.post(url, body).subscribe(
      (response: any) => {
        if (response != null) {
          this.listofproductdetails.length = 0;
          // const filteredbucket = response.data.filter(
          //   (item) => item.displayOrder === displayorder
          // );
          // console.log('filter after data');
          // console.log(filteredbucket);
          for (var key in response['data']) {
            this.listofproductdetails.push(response.data[key].productDetails);
          }
          console.log('buckets products');
          console.log(bucketid);
          console.log(this.listofproductdetails);
          this.loadbucketproducts$.next(this.listofproductdetails.slice(0,12) as any[]);
        } else {
          this.loadbucketproducts$.next(null);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_backet_products(): Observable<any[]> {
    return this.loadbucketproducts$.asObservable();
  }

  listofbucketproductdetails = [];
  get_list_of_bucketproducts_1(bucketid: any) {
    const body = {
      id: Number(bucketid),
      type: 'bucket',
    };
    console.log(bucketid);
    const url =
      this.base_url + 'ecommerce_services/admin/product/getProductByType/';
    this.httpClient.post(url, body).subscribe(
      (response: any) => {
        if (response != null) {
          this.listofbucketproductdetails.length = 0;
          for (var key in response['data']) {
            this.listofbucketproductdetails.push(
              response.data[key].productDetails
            );
          }
          console.log('buckets products');
          console.log(this.listofbucketproductdetails);
          // const filteredbucket = listofbucketproductdetails.filter(
          //   (item) => item.displayOrder === displayorder
          // );
          this.loadbucketproducts_1$.next(
            this.listofbucketproductdetails.slice(0,9) as any[]
          );
        } else {
          this.loadbucketproducts_1$.next(null);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_backet_products_1(): Observable<any[]> {
    return this.loadbucketproducts_1$.asObservable();
  }


  listofbucketproductdetails_2 = [];
  get_list_of_bucketproducts_2(bucketid: any) {
    const body = {
      id: Number(bucketid),
      type: 'bucket',
    };
    console.log(bucketid);
    const url =
      this.base_url + 'ecommerce_services/admin/product/getProductByType/';
    this.httpClient.post(url, body).subscribe(
      (response: any) => {
        if (response != null) {
          this.listofbucketproductdetails_2.length = 0;
          for (var key in response['data']) {
            this.listofbucketproductdetails_2.push(
              response.data[key].productDetails
            );
          }
          console.log('buckets products');
          console.log(this.listofbucketproductdetails_2);
          // const filteredbucket = listofbucketproductdetails.filter(
          //   (item) => item.displayOrder === displayorder
          // );
          this.loadbucketproducts_2$.next(
            this.listofbucketproductdetails_2.slice(0,9) as any[]
          );
        } else {
          this.loadbucketproducts_2$.next(null);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_backet_products_2(): Observable<any[]> {
    return this.loadbucketproducts_2$.asObservable();
  }


  listofbucketproductdetails_3 = [];
  get_list_of_bucketproducts_3(bucketid: any) {
    const body = {
      id: Number(bucketid),
      type: 'bucket',
    };
    console.log(bucketid);
    const url =
      this.base_url + 'ecommerce_services/admin/product/getProductByType/';
    this.httpClient.post(url, body).subscribe(
      (response: any) => {
        if (response != null) {
          this.listofbucketproductdetails_3.length = 0;
          for (var key in response['data']) {
            this.listofbucketproductdetails_3.push(
              response.data[key].productDetails
            );
          }
          console.log('buckets products');
          console.log(this.listofbucketproductdetails_3);
          // const filteredbucket = listofbucketproductdetails.filter(
          //   (item) => item.displayOrder === displayorder
          // );
          this.loadbucketproducts_3$.next(
            this.listofbucketproductdetails_3.slice(0,9) as any[]
          );
        } else {
          this.loadbucketproducts_3$.next(null);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  load_backet_products_3(): Observable<any[]> {
    return this.loadbucketproducts_3$.asObservable();
  }



}
