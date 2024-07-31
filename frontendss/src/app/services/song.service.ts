import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private apiservice: ApiService) { }
  
  getSong = (url: string, params: any): Observable<any> => {
    return this.apiservice.get(url, params);
  }
}
