import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
// interfaces
import { MenuItem, Organization, ApiResponse } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl: string = 'https://fable-api.elk-tree.site/api/organizations';

  private menuList: MenuItem[] = [
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

  constructor(private http: HttpClient) {}

  displayMenuData(): Observable<MenuItem> {
    const memuData = from(this.menuList);
    return memuData;
  }

  requestTestData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
