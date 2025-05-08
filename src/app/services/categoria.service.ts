import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/Categorias';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService{

    private apiUrl = 'http://localhost:3000/categorias'; //URL da API

    constructor(private http:HttpClient) {

    }

     categorias: Categorias[] = []

    list() : Observable<Categorias[]>{
        return this.http.get<Categorias[]>(this.apiUrl) as Observable<Categorias[]>
      }
}