import { Component } from '@angular/core';
import { IonApp, IonInput, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  standalone: true,
  imports: [IonApp, IonInput],
})
export class AppComponent {}
