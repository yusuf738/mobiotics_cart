import { Component, OnInit } from '@angular/core';
import { Page1Service } from '../page1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private page1Service: Page1Service) { }
  product_details_array: product_Details_class[] = [];
  product_details_array1: product_Details_class[] = [];
  itemQuantity: number = 0;
  itemTotal: number = 0
  itemQuantity1: number = 0;
  itemTotal1: number = 0
  valueIsOne: boolean = false;
  modelOpen: boolean
  display = 'none';
  ngOnInit() {
    this.page1Service.Get_product_details().subscribe(data => {
      this.product_details_array = data;
    })
  }


  incrementItem(INC_i: number) {

    this.product_details_array.forEach((element, e_index) => {
      if (element.addAndLessQuantity === this.product_details_array[INC_i].addAndLessQuantity) {
        this.product_details_array[INC_i].addAndLessQuantity += 1
        // console.log(this.product_details_array[INC_i].addAndLessQuantity)
      }
      if (element.Price === this.product_details_array[INC_i].Price) {
        this.sum(this.product_details_array[INC_i].Price)
      }
    })

    this.itemQuantity += 1

  }

  decrementItem(DEC_i: number) {
    this.product_details_array.forEach((element, e_index2) => {
      if (element.addAndLessQuantity === this.product_details_array[DEC_i].addAndLessQuantity) {
        if (this.product_details_array[DEC_i].addAndLessQuantity >= 1) {
          this.product_details_array[DEC_i].addAndLessQuantity -= 1
        }
        if (element.Price === this.product_details_array[DEC_i].Price) {
          this.subtraction(this.product_details_array[DEC_i].Price)
        }
      }
    })
    if (this.itemQuantity >= 1) {
      this.itemQuantity -= 1
    }

  }
  //   addCart() {
  // this.itemQuantity1=this.itemQuantity;
  // this.itemTotal1=this.itemTotal;

  //   }

  sum(sumValue: number) {
    this.itemTotal += sumValue
  }
  subtraction(subtractionValue) {
    if (this.itemTotal >= 1) {
      this.itemTotal -= subtractionValue
    }
  }
  checkOut() {
    if (this.modelOpen === false) {
      this.display = 'block'
      this.modelOpen = true
    } else {
      this.display = "none"
      this.modelOpen = false
    }
  }
}
export class product_Details_class {
  _id: string;
  Brand_name: string;
  Product_name: string;
  Quantity: string;
  Price: number;
  MRP: string;
  Image: string;
  Offer_text: string;
  addAndLessQuantity: number;
  constructor(_id: string, Brand_name: string, Product_name: string, Quantity: string,
    Price: number, MRP: string, Image: string, Offer_text: string, addAndLessQuantity?: number) {
    this._id = _id;
    this.Brand_name = Brand_name;
    this.Product_name = Product_name;
    this.Quantity = Quantity;
    this.Price = Price;
    this.MRP = MRP;
    this.Image = Image;
    this.Offer_text = Offer_text
    this.addAndLessQuantity = addAndLessQuantity ;
  }

}