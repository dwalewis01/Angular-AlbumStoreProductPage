import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { pipe } from 'rxjs';
import {Http , Response} from '@angular/http'
@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  constructor( private _http:HttpClient) { }

  getAlbum(id:number):Observable<any> {

  return this._http.get(this._albumUrl);
  }

}
