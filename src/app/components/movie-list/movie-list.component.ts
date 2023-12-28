import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  @Input() movie = {
    Title: '',
    Year: '',
    Poster: '',
    Director: '',
    Actors: '',
    Plot: '',
    Awards: '',
  };
}
