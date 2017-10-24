import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';

import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { ChatsProvider } from '../providers/chats/chats';
import { UtilProvider } from '../providers/util/util';


export const firebaseConfig = {
  apiKey: "AIzaSyAJBwqjqRKyZhOqFg6Mej7B2Kdnd2DWdag",
  authDomain: "chat-d612e.firebaseapp.com",
  databaseURL: "https://chat-d612e.firebaseio.com",
  projectId: "chat-d612e",
  storageBucket: "chat-d612e.appspot.com",
  messagingSenderId: "752958067143"
};


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    ChatsProvider,
    UtilProvider,
  ]
})
export class AppModule {}
