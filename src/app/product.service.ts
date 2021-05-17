import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album} from './album';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  //constructor( private _http:Http) { }
  constructor(private _http:HttpClient){}
  getAlbum(id: number):Observable<Album> {
    return this._http.get<Album>(this._albumUrl);
  }

}
