import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CategoryItemModel } from '../models/category-faq.dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    private apiUrl = `${environment.apiUrl}/category`;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryItemModel[]> {
    return this.http.get<CategoryItemModel[]>(this.apiUrl);
  }

  createCategory(categoryData: CategoryItemModel): Observable<CategoryItemModel> {
    return this.http.post<CategoryItemModel>(this.apiUrl, categoryData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
