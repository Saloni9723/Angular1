import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ApipromiseService } from './apipromise.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient, private promiseService: ApipromiseService) { }

  async getProduct(){
    return await this.promiseService.get("api/getProductList")
    .toPromise()
    // return await this.promiseService.get("http://10.0.0.43:8079/api/getProductList")
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
  async createProduct(payload: any){
    return await this.promiseService.postJSON("api/createProduct", payload)
    .toPromise()
    // return this.http.post("http://10.0.0.43:8079/api/createProduct", payload)
    // .pipe(map((res: any)=>{
    //   return res;
    // }))
  }
  async updateProduct(payload: any){
    return await this.promiseService.put("api/updateProduct", payload)
    .toPromise()
    // return this.http.put("http://10.0.0.43:8079/api/updateProduct", payload)
    // .pipe(map((res: any)=>{
    //   return res;
    // }))
  }
  async signUp(payload: any){
    return await this.promiseService.postJSON("api/signup", payload)
    .toPromise()
  }
  async login(payload: any){
    debugger;
    return await this.promiseService.postJSON("api/login", payload)
    .toPromise()
  }
  // login(payload: any){
  //   return this.http.post("http://10.0.0.43:8079/login", payload)
  // }
}
