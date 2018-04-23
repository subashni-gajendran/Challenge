import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 import {IProducts} from "./products";

 
 @Injectable()
 export class ApiService {
 
     private _postsURL = "https://my-json-server.typicode.com/subashni-gajendran/jsonFile/products/";
 
     constructor(private http: Http) {
     }
 
     getPosts(): Observable<IProducts[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <IProducts[]>response.json();
             })
             .catch(this.handleError);
     }
 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }

     
 }

 