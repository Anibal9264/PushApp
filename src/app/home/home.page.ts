import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { NotificationPushService } from '../services/notification-push.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private messageService: NotificationPushService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.listenForMessages();
  }

  listenForMessages(){
   this.messageService.getMessages().subscribe(async (msg:any) => {
    console.log('New Message: ', msg);
    
    const alert = await this.alertCtrl.create({
      header: msg.notification.title,
      subHeader: msg.notification.body,
      message: msg.data.info,
      buttons: ['OK']
    });

    await alert.present();

   });
  }


  resquestPermission(){
    this.messageService.requestPermission().subscribe(
      async token => {
        const toast = await this.toastCtrl.create({
          message: 'Got your token',
          duration: 2000
        });
        toast.present();
      },
      async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: err,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  async deleteToken() {
    this.messageService.deleteToken();
    const toast = await this.toastCtrl.create({
      message:'Token remove',
      duration: 2000
    });
    toast.present();
  }

}
