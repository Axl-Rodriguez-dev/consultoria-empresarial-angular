import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service, ContactInfo } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>('/data/services.json');
  }

  getContactInfo(): Observable<ContactInfo> {
    return this.http.get<ContactInfo>('/data/contact.json');
  }
}
