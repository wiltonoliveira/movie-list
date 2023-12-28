import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchBarComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie list';
  currentMovie = {
    Title: "",
    Year: "",
    Poster: "",
    Director: "",
    Actors: "",
    Plot: "",
    Awards: ""
  };
  
  movieEvent(event: any) {
    this.currentMovie.Title = event?.Title;
    this.currentMovie.Year = event?.Year;
    this.currentMovie.Poster = event?.Poster;
    this.currentMovie.Director = event?.Director;
    this.currentMovie.Actors = event?.Actors;
    this.currentMovie.Plot = event?.Plot;
    this.currentMovie.Awards = event?.Awards;
  }
}
