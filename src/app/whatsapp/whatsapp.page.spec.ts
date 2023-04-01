import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.page.html',
  styleUrls: ['./whatsapp.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WhatsappPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async onButton1Click() {
    console.log('Button 1 clicked');
    const input = document.getElementById('file-input') as HTMLInputElement;
    input.click();
  }

  async onFileSelected(event: Event): Promise<void> {
    const selectedFile: File | undefined = (event.target as HTMLInputElement)?.files?.[0];
    if (!selectedFile) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = (): void => {
      const dataUrl: string = reader.result as string;
      const whatsappLink: string = `whatsapp://send?text=${encodeURIComponent('¡Mira esta imagen!')} ${encodeURIComponent(dataUrl)}`;
      window.location.href = whatsappLink;
    };
    (error: ErrorEvent): void => {
      console.log('Error: ', error);
    };
  }


}