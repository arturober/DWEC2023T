import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [NgClass],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnInit {
  @Input({required: true}) rating!: number;
  @Output() ratingChanged = new EventEmitter<number>();
  auxRating!: number;

  ngOnInit(): void {
    this.auxRating = this.rating;
  }

  setRating(rating: number) {
    this.ratingChanged.emit(rating);
  }
}
