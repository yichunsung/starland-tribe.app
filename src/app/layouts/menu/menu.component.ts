import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// Services
import { MenuService } from './menu.service';
// interfaces
import { MenuItem, Organization } from '../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuList: MenuItem[] = [];

  public organizationData: Organization = {
    id: 0,
    company_name: '',
    building_date: '',
    address: ''
  };

  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.getMenuList();
    this.getDataFromAPI();
  }

  getMenuList(): void {
    this.menuService.displayMenuData()
      .subscribe(item => this.menuList.push(item));
  }

  getDataFromAPI(): void {
    this.menuService.requestTestData()
      .subscribe((res) => {
        this.organizationData = res.data[0];
        console.log(res.data[0]);
      });
  }
}
