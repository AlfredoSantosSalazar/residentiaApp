import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ScanQRPage implements OnInit {

  constructor() { }

  async ngOnInit() {
  }

  // async onButton3Click() {
  //   console.log('Button 3 clicked');
  //   try {
  //     const result = await BarcodeScanner.scan();
  //     alert(`El código QR escaneado es: ${result.text}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


}
