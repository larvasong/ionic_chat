import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
// import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(
    // public http: Http,
    public afDB:AngularFireDatabase,
    public local:Storage,
    // public camera:Camera
  ) {
    console.log('Hello UserProvider Provider');
  }



  // Get Current User's UID
  getUid() {
    return this.local.get('uid');
  }

  // Create User in Firebase
  createUser(auth) {
      let currentUserRef = this.afDB.object(`/users/${auth.uid}`);
      console.log(auth);
      currentUserRef.set({email: auth.email});
  }

  // Get Info of Single User
  getUser() {
    // Getting UID of Logged In User
    return this.getUid().then(uid => {
      return this.afDB.object(`/users/${uid}`);
    });
  }


  // Get All Users of App
  getAllUsers() {
      return this.afDB.list('/users').valueChanges();
  }

  // Get base64 Picture of User
  getPicture() {
      // let base64Picture;
      // let options = {
      //     destinationType: 0,
      //     sourceType: 0,
      //     encodingType:0
      // };
      //
      // let promise = new Promise((resolve, reject) => {
      //      this.camera.getPicture(options).then((imageData) => {
      //           base64Picture = "data:image/jpeg;base64," + imageData;
      //           resolve(base64Picture);
      //       }, (error) => {
      //           reject(error);
      //     });
      //
      // });
      // return promise;
  }

  // Update Provide Picture of User
  updatePicture() {
    // this.getUid().then(uid => {
    //   let pictureRef = this.afDB.object(`/users/${uid}/picture`);
    //   this.getPicture()
    //   .then((image) => {
    //       pictureRef.set(image);
    //   });
    // });
  }

}
