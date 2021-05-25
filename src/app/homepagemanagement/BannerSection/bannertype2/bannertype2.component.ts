import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../menu-section/menu.service';

@Component({
  selector: 'app-bannertype2',
  templateUrl: './bannertype2.component.html',
  styleUrls: ['./bannertype2.component.scss']
})
export class Bannertype2Component implements OnInit {

  loadbannertype2: Observable<any[]> = this.menuservices.load_banner_type2();
  constructor(private menuservices: MenuService) {}


  ngOnInit(): void {
  }
  Urlform(weburl: any) {
    var filename = weburl.replace(/^.*[\\\/]/, '');
    const url =
      'http://103.24.125.153/ecommerce_services/assets/upload_data/bannerImages/' +
      filename;
    return url;
  }
}
