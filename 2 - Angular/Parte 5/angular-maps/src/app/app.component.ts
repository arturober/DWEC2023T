import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BmMapDirective } from './bingmaps/bm-map.directive';
import { Coordinates } from './bingmaps/coordinates';
import { BmMarkerDirective } from './bingmaps/bm-marker.directive';
import { BmAutosuggestDirective } from './bingmaps/bm-autosuggest.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BmMapDirective, BmMarkerDirective, BmAutosuggestDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  coordinates: Coordinates = { latitude: 38.3245, longitude: -0.5 };

  moveMap(coords: Coordinates) {
    this.coordinates = coords;
  }
}
