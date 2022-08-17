import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllProducts()
    // .subscribe(res=>{
    //   this.productList = res.data;
    //   this.filterCategory = res.data;
    //   this.productList.forEach((a:any) => {
    //     if(a.category ==="women's clothing" || a.category ==="men's clothing"){
    //       a.category ="fashion"
    //     }
    //     Object.assign(a,{quantity:1,total:a.price});
    //   });
    //   console.log(this.productList)
    // });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  async getAllProducts() {
    var res = await this.api.getProduct()
    // .subscribe({
    //   next: (res: any)=>{
    //     console.log(res)
    //     this.productList = res.data
    //   }
    // })
    console.log(res)
    this.productList = res.data
    this.filterCategory = res.data;
    this.productList.forEach((a: any) => {
      if (a.category === "women's clothing" || a.category === "men's clothing") {
        a.category = "fashion"
      }
      Object.assign(a, { quantity: 1, total: parseFloat(a.price) });
    });
    console.log(this.productList)
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }

}
