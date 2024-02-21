import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [NgClass, FaIconComponent],
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

  starEmpty = faStarRegular;
  starFull = faStarSolid;

  restoreRating() {
    this.auxRating = this.#rating;
  }

  setRating(rating: number) {
    this.ratingChanged.emit(rating);
  }
}
