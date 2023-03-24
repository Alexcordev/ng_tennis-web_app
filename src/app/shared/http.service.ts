import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(public http: HttpClient) { }

httpGet(url: any) {
  return this.http.get(url);
}

httpPost(url: any, {}: any) {
  return this.http.post(url, { name: "Subrat" });
}
sendEmail(url: string, data: { name: any; email: any; comments: any; }) {
  return this.http.post(url, data);
}
}
