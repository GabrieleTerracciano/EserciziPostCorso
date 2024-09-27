import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo.interface';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  apiURL = 'https://jsonplaceholder.typicode.com/photos';
  favoriteSub = new Subject<number>();
  favoriteCounter = 0;

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<Photo[]>(this.apiURL).pipe(
      catchError((err) => {
        return throwError(this.getErrorMessage(err.status));
      })
    );
  }

  deletePhoto(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`).pipe(
      catchError((err) => {
        return throwError(this.getErrorMessage(err.status));
      })
    );
  }

  addFavorites() {
    this.favoriteCounter++;
    this.favoriteSub.next(this.favoriteCounter);
  }

  getErrorMessage(status: number) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Elementi non trovati';
        break;

      default:
        message = 'Qualcosa non ha funzionato nella chiamata';
        break;
    }
    return message;
  }
}
