import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent implements OnInit {
  listofdata: Observable<any[]> = this.menuservices.loaddata();
  listofstores: Observable<any[]> = this.menuservices.load_stores();

  getstoreid: any;
  constructor(private menuservices: MenuService) {}
   formbody: any;
  ngOnInit(): void {
    this.menuservices.get_listofdata();
    this.menuservices.get_list_of_Stores();
    //  this.formbody={
    //   storeId: 0,
    //   bannerType: 1,
    //  }
     this.menuservices.get_top_banner(0);
     this.menuservices.get_banner_type2(0);
     this.menuservices.get_banner_type3(0);
     this.menuservices.get_buckets(0);
  }
  getthestoreId(event: any) {
    console.log("store id");
    console.log(event.target.value);
    this.menuservices.get_top_banner(Number(event.target.value));
    this.menuservices.get_banner_type2(Number(event.target.value));
    this.menuservices.get_banner_type3(Number(event.target.value));
    this.menuservices.get_buckets(Number(event.target.value));
  }
}
