import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../menu-section/menu.service';

@Component({
  selector: 'app-bucketone',
  templateUrl: './bucketone.component.html',
  styleUrls: ['./bucketone.component.scss'],
})
export class BucketoneComponent implements OnInit {
  listbucketone: Observable<any[]> = this.menuservice.load_backets();
  listbucketproducts: Observable<any[]> =
    this.menuservice.load_backet_products();
  listofbucketproductrs_1: Observable<any[]> =
    this.menuservice.load_backet_products_1();
    listofbucketproductrs_2: Observable<any[]> =
    this.menuservice.load_backet_products_2();
   listofbucketproductrs_3: Observable<any[]> =
    this.menuservice.load_backet_products_3();
   // loadbannertype3: Observable<any[]> = this.menuservices.load_banner_type3();
 
    constructor(private menuservice: MenuService) {}
  bucketid: any;

  ngOnInit(): void {
    this.menuservice.get_bucket_products(6);
    this.menuservice.get_list_of_bucketproducts_1(7);
    this.menuservice.get_list_of_bucketproducts_2(8);
    this.menuservice.get_list_of_bucketproducts_3(9);
  }

  Urlform(weburl: any) {
    var filename = weburl.replace(/^.*[\\\/]/, '');
    const url =
      'http://103.24.125.153/ecommerce_services/assets/upload_data/bannerImages/' +
      filename;
    return url;
  }
  
  get_bucket_products(bucketid: any) {
    console.log(bucketid);
    this.menuservice.get_bucket_products(bucketid);
  }

  // ngAfterViewInit() {
  //   setTimeout(function () {
  //     jQuery('.brand-slider').owlCarousel({
  //       loop: true,
  //       margin: 10,
  //       nav: false,
  //       responsive: {
  //         0: {
  //           items: 1,
  //         },
  //         600: {
  //           items: 2,
  //         },
  //         1000: {
  //           items: 4,
  //         },
  //       },
  //     });
  //   }, 300);
  // }

  returntruefalse(val: any) {
    console.log(val);
    if (val === 1) {
      console.log(true);
      return true;
    } else {
      return false;
    }
  }
}
