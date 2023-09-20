import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './user.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/users';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  findById(id: number | undefined): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<User>(url);
  }

  update(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`
    return this.http.put<User>(url, user);
  }
}
