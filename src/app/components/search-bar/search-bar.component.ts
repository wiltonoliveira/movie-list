import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class SearchBarComponent {
  title = new FormControl('');
  @Output() movieData = new EventEmitter<object>();
  constructor() {}
  
  searchMovie() {
    const title = this.title.value;
    if (title) {
      this.fetchMovie(title);
    }
  }

  fetchMovie(title: string) {
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=360d5533`)
      .then(response => response.json())
      .then(data => {
        this.movieData.emit(data);
      });
  }
}
