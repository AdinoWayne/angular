import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError, NotFoundError } from '../common/app-error-handle';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string ,private http: Http) { }
  getAll() {
    return this.http.get(this.url)
    .pipe(
        map(response => response.json()),
        catchError(this.handleError)
    )
  }
  create(resource) {
    // return throwError(new AppError())
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
        map(response => response.json()),
        catchError(this.handleError)
    )
  }
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(
        map(response => response.json()),
        catchError(this.handleError)
    )
  }
  delete(resource) {
    return this.http.delete(this.url + '/' + resource.id)
    .pipe(
        map(response => response.json()),
        catchError(this.handleError)
    )
  }
  private handleError(error: Response) {
    if(error.status === 404) {
      return throwError(new NotFoundError(error.json()));
    } else {
      return throwError(new AppError(error))
    }
  }
}
