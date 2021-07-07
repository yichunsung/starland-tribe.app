export interface MenuItem {
  id: number;
  title: string;
  style: string;
  path: string;
}

export interface ApiResponse {
  status: number;
  message: string;
  data: Organization[];
}

export interface Organization {
  id: number;
  company_name: string;
  building_date: string;
  address: string;
}
