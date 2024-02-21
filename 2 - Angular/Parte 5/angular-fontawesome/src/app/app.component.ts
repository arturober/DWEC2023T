import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaIconComponent, FaIconLibrary, FaLayersComponent, FaLayersCounterComponent } from '@fortawesome/angular-fontawesome';
import { faCoffee, faEnvelope, faSpinner, faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaIconComponent, FaLayersComponent, FaLayersCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-fontawesome';

  #faIconLibrary = inject(FaIconLibrary);

  constructor() {
    this.#faIconLibrary.addIcons(faCoffee, faSquare, faSpinner, faEnvelope);
  }
}
