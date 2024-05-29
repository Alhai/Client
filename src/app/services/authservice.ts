import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-dto';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register-dto';
import { environment } from 'src/environments/environment';

console.log(environment.apiUrl); 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginModel> {
    return this.http.post<LoginModel>(`${this.apiUrl}/login`, { email, password });
  }

  register(username: string, email: string, password: string): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(`${this.apiUrl}/register`, { username, email, password });
  }
}
