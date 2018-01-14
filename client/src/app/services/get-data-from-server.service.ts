import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetDataFromServerService {

  domain = "http://localhost:8080";
  constructor(
    private http: Http
  ) { }

  chargerDataRestaurants(){
    return this.http.get(this.domain + "/api/restaurants").map(res=> res.json());
  }

  modifierRestaurant(restaurant){
    return this.http.put(this.domain + "/api/restaurants", restaurant).map(res=> res.json());
  }

  getRestaurantById(id){
    return this.http.get(this.domain + "/api/restaurants/" + id).map(res => res.json());
  }

  supprimerRestaurant(id){
    return this.http.delete(this.domain + "/api/restaurants/"+id).map(res => res.json());
  }
}
