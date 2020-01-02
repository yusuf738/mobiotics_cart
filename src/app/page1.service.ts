import { Injectable } from '@angular/core';
import { product_Details_class } from './page1/page1.component';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { promise } from 'protractor'
import * as details from '../assets/product_details.json'
import { Observable } from 'rxjs';
// products:  any  = (details  as  any).default

@Injectable({
  providedIn: 'root'
})
export class Page1Service {
  Get_product_details_array:[]= [];
  constructor(private http_client: HttpClient) { }
  Get_product_details():Observable<product_Details_class[]> {
  return this.http_client.get <product_Details_class[]>('./assets/product_details.json')
//       console.log(data)
//       // this.Get_product_details_array=data;
//       data.forEach((element) => {
// let a=new product_Details_class(element._id,element.Brand_name,element.Product_name,element.Quantity,element.Price,
//   element.Offer_text,element.Image,element.MRP)
  // console.log(a)
        
      // });
    //   return this.Get_product_details_array = details.default;
    //   console.log(this.Get_product_details_array)

    // })
    // console.log(this.Get_product_details_array)
  }

}
