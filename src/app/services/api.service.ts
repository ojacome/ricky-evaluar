import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersResponse } from '../interfaces/apiResponse.interface';
const BASE_URL = "https://rickandmortyapi.com/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  getCharacters() : Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${BASE_URL}/character`);
  }

  getCharacter(id)  {
    return this.http.get(`${BASE_URL}/character/${id}`);
  }
}
