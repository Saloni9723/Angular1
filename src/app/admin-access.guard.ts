import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate {

  constructor(
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userType = (localStorage.getItem('userType'))
    if (userType != 'admin') {
      console.log(userType)
      this.router.navigate(['/login'])
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
      return false
    }
    return true;
  }

}
