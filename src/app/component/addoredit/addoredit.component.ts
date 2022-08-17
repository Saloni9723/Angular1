import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
declare var $: any

@Component({
  selector: 'app-addoredit',
  templateUrl: './addoredit.component.html',
  styleUrls: ['./addoredit.component.scss']
})
export class AddoreditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  productForm!: FormGroup;
  @Output() newPro = new EventEmitter<any>()
  @Output() close = new EventEmitter<any>()
  @Input() selPro: any

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [],
      title: [],
      category: [],
      count: [],
      price: [],
      description: [],
      image: [],
      rate: []
    })
    this.populateDets()
  }
  populateDets(){
    console.log(this.selPro)
    // debugger
    this.productForm.patchValue(this.selPro)
  }
  closeModal(){
    // debugger;
    this.close.emit()
    // $("#myModal").modal("hide");
  }
  async addProduct(){
    // debugger;
    var res = await this.api.createProduct(this.productForm.value)
    // .subscribe(res=>{
    //   console.log(res)
    // })
    this.closeModal()
    this.newPro.emit()
  }
  async editProduct(){
    // debugger;
    var res = await this.api.updateProduct(this.productForm.value)
    // .subscribe(res=>{
    //   console.log(res)
    // })
    this.newPro.emit()
    this.closeModal()
  }
  async addOrEdit(){
    // debugger;
    if(this.selPro){
      this.editProduct()
    }else{
      this.addProduct()
    }
  }

}
