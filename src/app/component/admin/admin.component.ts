import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
declare var $: any

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private api: ApiService
  ) { }
  productList: any

  ngOnInit(): void {
    this.getAllProducts()
  }

  async getAllProducts() {
    // debugger;
    var res =  await this.api.getProduct()
      // .subscribe({
      //   next: (res: any)=>{
      //     console.log(res)
      //     this.productList = res.data
      //   }
      // })
      console.log(res)
      this.productList = res.data
  }

  selectedProduct: any
  getSelectedProduct(data: any) {
    this.selectedProduct = data
    console.log(data)
  }

  openModal() {
    // this.selectedProduct = null
    $("#myModal").modal("show");
  }
  // openModalEdit() {
  //   $("#myModal").modal("show");
  // }
  closeModal() {
    // debugger;
    console.log('working');
    $("#myModal").modal("hide");
    this.selectedProduct = null
  }

}