import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-dto';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:1337/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginModel> {
    return this.http.post<LoginModel>(`${this.apiUrl}/login`, { email, password });
  }

  register(username: string, email: string, password: string): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(`${this.apiUrl}/register`, { username, email, password });
  }
}
