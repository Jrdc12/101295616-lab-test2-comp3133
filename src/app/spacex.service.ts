import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from './launch.model'; // Add this import

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(year?: number): Observable<Launch[]> {
    const url = year ? `${this.apiUrl}?launch_year=${year}` : this.apiUrl;
    return this.http.get<Launch[]>(url);
  }
}
