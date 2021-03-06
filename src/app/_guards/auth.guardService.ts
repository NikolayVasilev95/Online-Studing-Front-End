import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // return true;
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser.roles[0].name == 'ADMIN') {
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
@Injectable()
export class AuthGuardUser implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // return true;
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser.roles[0].name == 'USER') {
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
@Injectable()
export class AuthGuardTeacher implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // return true;
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser.roles[0].name == 'TEACHER') {
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}