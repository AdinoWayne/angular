import { Component } from '@angular/core';
import { favoriteInterface } from './favorite/favorite.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  courses;
  trackCourse(index, course) {
    course ? course.id: undefined
  }
  loadCourse() {
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
    ];
  }
  onFavoriteChanged(param : favoriteInterface) {
    console.log("favorite had change:", param)
  }
}
