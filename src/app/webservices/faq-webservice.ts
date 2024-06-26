import { FaqItemsModel } from '../models/faq-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqWebService {
  private apiUrl = `${environment.apiUrl}/faq`;

  constructor(private http: HttpClient) { }

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
