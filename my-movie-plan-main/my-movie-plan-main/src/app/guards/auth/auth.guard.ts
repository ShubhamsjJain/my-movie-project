import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private _userService: UserService, private _router: Router) { }
  canActivate(): boolean {
    if (this._userService.isLoggedIn())
      return true;
    else
      this._router.navigate(['/user/login']);
    return false;
  }
}
