import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu-section/menu.service';
@Component({
  selector: 'app-allbuckets',
  templateUrl: './allbuckets.component.html',
  styleUrls: ['./allbuckets.component.scss']
})
export class AllbucketsComponent implements OnInit {
  // listbucketone: Observable<any[]> = this.menuservice.load_backets();
  constructor(private menuservice: MenuService) {}

  ngOnInit(): void {
  }

}
