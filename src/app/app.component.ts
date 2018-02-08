import { Component } from '@angular/core';
import { ClientToken } from './clienttoken';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _http: Http) {
  }
  title = 'app';
  apiroot: string = 'http://lvdev-iis01:1966/RegisterClient';
  //apiroot: string = 'http://localhost:50081/dispenses/preview';
  //apiroot: string = 'http://localhost:50081/RegisterClient';
  
  
  model = new ClientToken('token', 'c3g3d1m');

 doPOST() {
    console.log(this.model.token);
    this._http.post(this.apiroot, this.model).subscribe(res => console.log(res.json()));
    window.location.href = 'http://lvdev-iis01:1966/settings/ClientSettings/View';
  }  
}
