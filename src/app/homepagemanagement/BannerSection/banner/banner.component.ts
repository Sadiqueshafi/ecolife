import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../menu-section/menu.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class BannerComponent implements OnInit {
  loadtopbanner: Observable<any[]> = this.menuservices.load_topbanner();
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
