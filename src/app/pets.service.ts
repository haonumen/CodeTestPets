import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Owner } from "./model/owner"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private petsUrl = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners';

  constructor(
    private http: HttpClient
  ) { }

  /** GET pets from the server */
  getPets (): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.petsUrl)
      .pipe(
        tap(_ => console.log('fetched pets')),
        catchError(this.handleError<Owner[]>('getPets', []))
      );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
