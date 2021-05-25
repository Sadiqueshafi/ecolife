import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  listofdata: Observable<any[]> = this.catservice.loaddata();

  constructor(private catservice: CategoryService) {}

  ngOnInit(): void {
    this.catservice.get_listof_categories();
  }

  Urlform(weburl: any) {
    var filename = weburl.replace(/^.*[\\\/]/, '');
    const url =
      'http://103.24.125.153/ecommerce_services/assets/upload_data/bannerImages/' +
      filename;
    return url;
  }

 
}
