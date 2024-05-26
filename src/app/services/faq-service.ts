import { FaqItemsModel } from '../models/faq-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private apiUrl = 'http://localhost:1337/faq';

  constructor(private http: HttpClient) {}

  getAllFaqs(): Observable<FaqItemsModel[]> {
    return this.http.get<FaqItemsModel[]>(`${this.apiUrl}`);
  }

  getFaqById(id: string): Observable<FaqItemsModel> {
    return this.http.get<FaqItemsModel>(`${this.apiUrl}/${id}`);
  }

  createFaq(faq: FaqItemsModel): Observable<FaqItemsModel> {
    return this.http.post<FaqItemsModel>(this.apiUrl, faq);
  }

  updateFaq(id: string, faq: FaqItemsModel): Observable<FaqItemsModel> {
    return this.http.put<FaqItemsModel>(`${this.apiUrl}/${id}`, faq);
  }

  deleteFaq(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  getFaqsByCategoryId(categoryId: string): Observable<FaqItemsModel[]> {
    return this.http.get<FaqItemsModel[]>(`${this.apiUrl}?category=${categoryId}`);
  }
}
