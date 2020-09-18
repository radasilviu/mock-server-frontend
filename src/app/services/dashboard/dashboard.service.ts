import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }
  readFromFile(): Observable<string> {
    return this.http.get('assets/tableInput.json', {responseType: 'text'});
  }
}
