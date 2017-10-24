import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private afAuth: AngularFireAuth,
    public toast: ToastController
  ) {
    this.intialize();
    this.hide();
  }

  intialize() {
    this.afAuth.authState.subscribe(auth => {
      console.log('app html');
      console.log(auth);


      if ( auth && auth.email && auth.uid ) {
        this.rootPage = 'TabsPage';

        this.toast.create({
          message: `Welcome to chat, ${auth.email}`,
          duration: 1000
        }).present();
      }
      else {
        this.rootPage = 'LoginPage';
      }
    });
  }

  hide() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }
}
