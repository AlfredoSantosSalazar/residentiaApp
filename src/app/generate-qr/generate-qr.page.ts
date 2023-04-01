import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as QRCode from 'qrcode'; 


@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.page.html',
  styleUrls: ['./generate-qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GenerateQRPage implements OnInit {

  constructor() { }

  async ngOnInit() {
  }


  async onButton2Click() {
    try {
      console.log('Button 2 clicked');
      const code = Math.floor(1000000000 + Math.random() * 9000000000).toString();
      const canvas = document.getElementById('qr-code') as HTMLCanvasElement;

      const qrCodePromise = new Promise<void>((resolve, reject) => {
        QRCode.toCanvas(canvas, code, { errorCorrectionLevel: 'H' }, (error: any) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            console.log('QR code generated');
            resolve();
          }
        });
      });
      await qrCodePromise;

    } catch (error) {
      console.error(error);
    }
  }


}
