import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewapiserviceService {

  constructor(private _http:HttpClient) { }

  newApiUrl = "https://krds-assignment.github.io/aoc/api-assets/data.json";

  topHeading():Observable<any>
  {
    return this._http.get(this.newApiUrl)
  }
}
