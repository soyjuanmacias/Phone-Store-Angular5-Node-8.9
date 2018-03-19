import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const baseUrl = `http://localhost:3000`;
const getPhonesUrl = `${baseUrl}/phones`;

@Injectable()
export class PhoneService {
  constructor(private http: HttpClient) { }

  getPhones() {
    return this.http.get(getPhonesUrl)
      .map((res: Response) => {
        return res;
      })
      .catch(error => this.handleError(error));
  }

  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(`Phone Service error: ${error.json()}`);
    }
    return Observable.throw(error);
  }
}
