import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { FirebaseList} from 'angularfire2'
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users:Observable<any[]>;
  uid:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth:AngularFireAuth,
    public afDB:AngularFireDatabase,
    public userProvider:UserProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ngOnInit() {
        this.userProvider.getUid()
        .then(uid => {
            this.uid = uid;
            this.users = this.userProvider.getAllUsers();
        });
    };

    openChat(key) {
        let param = {uid: this.uid, interlocutor: key};
        // this.navCtrl.push(ChatViewPage,param);
    }

}
