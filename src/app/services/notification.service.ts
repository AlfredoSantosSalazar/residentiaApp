import { Injectable } from '@angular/core';
// import { FirebaseMessaging } from '@capacitor-community/firebaseMessaging';
import { Platform } from '@ionic/angular';
// import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private platform: Platform,
    // private firebaseMessaging: FirebaseMessaging,
    // private afMessaging: AngularFireMessaging
  ) { }

  // async requestPermission() {
  //   if (this.platform.is('cordova')) {
  //     await this.firebaseMessaging.requestPermission();
  //   } else {
  //     console.warn('Push notifications not available. Cordova is not available.');
  //   }
  // }

  // init() {
  //   if (this.platform.is('cordova')) {
  //     this.firebaseMessaging.getToken().then(token => {
  //       console.log(`The token is ${token}`);
  //     });
  //     this.firebaseMessaging.onTokenRefresh().subscribe(token => {
  //       console.log(`The new token is ${token}`);
  //     });
  //     this.firebaseMessaging.onMessage().subscribe(data => {
  //       console.log(`Received message: ${JSON.stringify(data)}`);
  //     });
  //   } else {
  //     console.warn('Push notifications not available. Cordova is not available.');
  //   }
  // }

  // receiveMessage() {
  //   this.afMessaging.onMessage.subscribe((payload) => {
  //     console.log('Message received', payload);
  //   });
  // }

}