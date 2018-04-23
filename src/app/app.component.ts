import {Component, OnInit, Inject} from "@angular/core";
 import {ApiService} from "./app.service";
 import {IProducts} from "./products";
import { DOCUMENT } from '@angular/platform-browser';
 
 @Component({
    moduleId: module.id.toString(),
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.scss'],
     providers: [ApiService]
 })
 export class AppComponent implements OnInit {
     _postsArray: IProducts[];
     countNumber: number = 0;
     showDialog: boolean = false;
     details: string;
     title: string;
     brand: string;
     tag: string;
     productImage: string; 
     submitUrl: string;

        constructor(private apiSerivce: ApiService,@Inject(DOCUMENT) private document: any) {
     }
 
     getPosts(): void {
         this.apiSerivce.getPosts()
             .subscribe(
                 resultArray => this._postsArray = resultArray,
                 error => console.log("Error :: " + error)
             )
     }

     onCheckboxChange(eventTypeChkBoxObj){
      if(eventTypeChkBoxObj.target.checked ==true){
          this.countNumber = this.countNumber+1;
      } else{
        this.countNumber = this.countNumber-1;
      }
     }
   
     ngOnInit(): void {
         this.getPosts();
     }

     openDialog(productdetail){
     this.title	  = productdetail.name;
     this.details = productdetail.description;
     this.brand   = productdetail.brand;
     this.tag      = productdetail.tag;
     this.productImage = productdetail.image;
     this.showDialog = true;
     console.log("Form Submitted!");
     }

     goToUrl(): void {
    this.document.location.href = 'https://sampler.io/';
}
 }

