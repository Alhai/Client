import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../modules/admin/dialogs/create-faq/create-faq.component';
import { CategoryItemModel } from '../models/category-faq.dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    private apiUrl = 'http://localhost:1337/category';

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
