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
  async getRoutes(route:string){
    const filteredData = this.db.collection('Routes', ref => ref.where('route_name','==',route))
    this.res_id = await new Promise(resolve => {
      filteredData.snapshotChanges().subscribe((data) => {
        let dat = resolve(data.map((a) => {
          let id = a.payload.doc.id;
          return id;
        })); return dat;
      })
    });
    let res
    for(var _id in this.res_id){
      res = await new Promise(resolve => { 
        this.routes.doc(_id).collection('stops').snapshotChanges().subscribe((data)=>{
          let stops = resolve(data.map((e)=>{
            const data = e.payload.doc.data()
            return {...data}
          })); 
          return stops
        });
      });
      this.res.push(res)
    }
    console.log(this.res)
  }
}
