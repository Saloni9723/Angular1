import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  user: any
  constructor(private cartService : CartService, private router: Router) { }

  ngOnInit(): void {
    // debugger;
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    this.user = JSON.parse(localStorage.getItem('user') || '{}')
    // this.user = JSON.parse(x)
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  homePage(){
    console.log('Working')
    this.router.navigate(['/'])
  }
  logOut(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  goToAdmin(){
    this.router.navigate(['/admin'])
  }
}
