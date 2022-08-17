import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = 'http://10.0.0.43:8079/'

@Injectable({
  providedIn: 'root'
})
export class ApipromiseService {

  constructor(
    private httpClient: HttpClient
  ) { }

  formatErrors: any

  public get(path:string, params: HttpParams = new HttpParams()):Observable<any>{
    return this.httpClient.get(BASE_URL + path, {params}).pipe(catchError(this.formatErrors))
  }
  public postJSON(path: string, body: object = {}): Observable<any> {

    // const headers = new HttpHeaders()

    //   .set('content-type', 'application/json')

    //   .set('Access-Control-Allow-Origin', '*');



    return this.httpClient

      .post(BASE_URL + path, (body))

      .pipe(catchError(this.formatErrors));

  }

  public put(path: string, body: object = {}): Observable<any> {

    return this.httpClient

      .put(BASE_URL + path, (body))

      .pipe(catchError(this.formatErrors));

  }
}
