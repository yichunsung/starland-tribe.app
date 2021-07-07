import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// interfaces
import { MenuItem } from '../interfaces/menu.interface';

interface Organization {
  id: number;
  company_name: string;
  building_date: string;
  address: string;
}

interface APIReturn {
  status: number;
  message: string;
  data: Organization[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private apiUrl: string = 'https://fable-api.elk-tree.site/api/organizations';

  public menuList: MenuItem[] = [
    {
      id: 1,
      title: 'New Game',
      style: 'is-primary',
      path: '/game'
    },
    {
      id: 2,
      title: 'Load Game',
      style: 'is-primary',
      path: '/game'
    },
    {
      id: 3,
      title: 'Settings',
      style: 'is-primary',
      path: '/game'
    },
    {
      id: 4,
      title: 'Quit Game',
      style: 'is-error',
      path: '/game'
    }
  ];

  public organizationData: Organization = {
    id: 0,
    company_name: '',
    building_date: '',
    address: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDataFromAPI().subscribe((res) => {
      this.organizationData = res.data[0];
      console.log(res.data[0]);
   });
  }

  getDataFromAPI(): Observable<APIReturn> {
    console.log(this.apiUrl);
    return this.http.get<APIReturn>(this.apiUrl);
  }
}
