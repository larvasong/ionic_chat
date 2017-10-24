import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(
    public http: Http,
    public afAuth:AngularFireAuth,
    public local:Storage
  ) {
    console.log('Hello AuthProvider Provider');
  }

  // signin(credentails) {
  //   return this.afAuth.login(credentails);
  // }
  //
  // createAccount(credentails) {
  //   return this.afAuth.createUser(credentails);
  // };
  //
  // logout() {
  //    this.afAuth.logout();
  // }

}
