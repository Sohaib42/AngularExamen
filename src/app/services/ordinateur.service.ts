import { Injectable } from '@angular/core';
import {Ordinateur} from "../models/ordinateur";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
ordinateur : Ordinateur[];
apiUrl = 'http://localhost:3000/ordinateur';

httpOptions = {
  headers : new HttpHeaders({
    'Content-type':'application/json'
  })
};
  constructor(private http : HttpClient) { }

  getAllComputers():Observable<Ordinateur[]>{
    return this.http.get<Ordinateur[]>(this.apiUrl, this.httpOptions).pipe(
      retry(1),catchError(this.handleError)
    )
  }
  getOneComputer(id: number): Observable<Ordinateur>{
    return this.http.get<Ordinateur>(this.apiUrl + '/' + id).pipe(
      retry(1),catchError(this.handleError)
    );
  }
  addOrdinateur(ordinateur: Ordinateur): Observable<Ordinateur>{
    return this.http.post<Ordinateur>(this.apiUrl, ordinateur, this.httpOptions).pipe(catchError(this.handleError)
    );
  }
  updateOrdinateur(ordinateur: Ordinateur) {
    return this.http.put<Ordinateur>(this.apiUrl + '/' + ordinateur.id,ordinateur, this.httpOptions).pipe(
     catchError(this.handleError)
    );
  }
  deleteOrdinateur(id: number): Observable<Ordinateur>{
    return this.http.delete<Ordinateur>(this.apiUrl + '/' + id).pipe(
      retry(1),catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}


