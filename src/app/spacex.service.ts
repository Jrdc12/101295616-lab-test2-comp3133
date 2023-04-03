import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this import
import { Launch } from './launch.model';

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

  // Add this method
  getLaunchDetails(flight_number: number): Observable<Launch> {
    const url = `${this.apiUrl}/${flight_number}`;
    return this.http.get<Launch>(url).pipe(map((response) => response));
  }
}
