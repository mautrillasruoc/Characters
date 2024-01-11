import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';
import { Characters } from '../models/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Characters> {
    return this.http.get<Characters>(
      'https://rickandmortyapi.com/api/character'
    );
  }

  getImageById(id: String): Observable<Character> {
    return this.http.get<Character>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }
}
