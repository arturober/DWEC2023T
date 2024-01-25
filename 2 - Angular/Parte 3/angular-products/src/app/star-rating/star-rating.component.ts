import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [NgClass],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input({required: true})
  set rating(rating: number) {
    this.#rating = rating;
    this.auxRating = rating;
  }

  @Output() ratingChanged = new EventEmitter<number>();
  #rating!: number;
  auxRating!: number;

  restoreRating() {
    this.auxRating = this.#rating;
  }

  setRating(rating: number) {
    this.ratingChanged.emit(rating);
  }
}
