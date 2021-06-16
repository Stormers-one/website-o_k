import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import BusStop from '../models/busStop';
import Route from '../models/routes';

@Injectable({
  providedIn: 'root'
})
export class BusStopsService {
  stops: AngularFirestoreCollection<BusStop>;
  routes: AngularFirestoreCollection<Route>;
  constructor(private db: AngularFirestore) {
    this.stops = db.collection('Bus Stops');
    this.routes = db.collection('Routes');
  }
  getStops() {
    return this.stops;
  }

  async getRoutes(route:string){
    const res = this.db.collection('Routes', ref => ref.where('route_name','==',route))
    console.log(res)
  }
}
