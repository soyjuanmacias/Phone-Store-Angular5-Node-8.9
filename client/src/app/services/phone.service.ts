import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PhoneService {

  private baseUrl = `http://localhost:3000`;
  private getPhonesUrl = `${this.baseUrl}/phones`;

  private httpOptions: RequestOptions = new RequestOptions({
    headers: new Headers({
      'Access-Control-Allow-Origin': '*',
    })
  });

  constructor(private http: Http) { }

  getPhones() {
    return this.http.get(this.getPhonesUrl, this.httpOptions)
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
