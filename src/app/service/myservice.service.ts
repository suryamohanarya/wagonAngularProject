import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:5000/assignment/';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(
  		private httpClient: HttpClient
  ) { }

  create(data:any){
  		let final_url = baseURL+'add-product';
  		return this.httpClient.post(final_url,data);
  }

  readAll(){
  	let final_url = baseURL+'list-product'
    return this.httpClient.get(final_url);
  }

  read(id:any){
  	let final_url = baseURL+'individual-product-fetch';
    return this.httpClient.get(`${final_url}/${id}`);
  }

  update(id:any, data:any){
  	let final_url = baseURL+'update-product'
    return this.httpClient.put(`${final_url}/${id}`, data);
  }

  delete(id:any){
  	let final_url = baseURL+'delete-product';
    return this.httpClient.delete(`${final_url}/${id}`);
  }

}
