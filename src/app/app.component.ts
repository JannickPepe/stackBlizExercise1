import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kyle Pedersen';
  cardContent = 'This is very usefull indeed';
  url="https://www.w3schools.com?name=ADAM";
  constructor() {}
}
