import { HttpClient } from '@angular/common/http';
import { Component, VERSION, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { modelString, modelResultado, modelObjeto } from './iModel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private _jsonURL = './assets/data.json';
  resultado = {} as modelResultado;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getJSON().subscribe((data) => {
      this.resultado = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
