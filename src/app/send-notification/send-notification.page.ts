import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.page.html',
  styleUrls: ['./send-notification.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SendNotificationPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async onButton4Click() {
    console.log('Button 1 clicked');
    const alert = await this.alertController.create({
      header: 'Push-Notification',
      message: 'Notificación automática',
      buttons: ['OK']
    });
    await alert.present();
  }


}

