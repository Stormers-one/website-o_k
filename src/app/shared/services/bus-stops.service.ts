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
  res_id:any = []
  res:any = []
  // prev_route:string = ''
  async getRoutes(route:string){
    var StoredRouteResRaw = localStorage.getItem(route);
    var StoredRouteRes
    this.res = []
    if(StoredRouteResRaw==null){
      const filteredData = this.db.collection('Routes', ref => ref.where('route_name','==',route))
      this.res_id = await new Promise(resolve => {
        filteredData.snapshotChanges().subscribe((data) => {
          let dat = resolve(data.map((a) => {
            let id = a.payload.doc.id;
            return id;
          })); return dat;
        })
      });
      for(var _id of this.res_id){
        let res = await new Promise(resolve => { 
          this.routes.doc(_id).collection('stops').valueChanges().subscribe((data)=>{
            let stops = resolve(data.map((e)=>{
              const data = e
              return data
            })); 
            return(stops)
          });
        });
        this.res.push(res)
      }
      localStorage.setItem(route, JSON.stringify(this.res));
      StoredRouteRes = JSON.parse(localStorage.getItem(route)!)
    }else{
      StoredRouteRes = JSON.parse(StoredRouteResRaw)
    }
    // this.prev_route = route
    return StoredRouteRes
  }
}
