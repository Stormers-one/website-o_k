import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  data;
  schedule;
  route;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.data = this.router.getCurrentNavigation()?.extras.state
    if (this.data == null) {
      this.goBackOnce()
    }
    this.schedule = this.data![0]
    this.route = this.data![1]
    console.log(this.schedule)
  }
  goBackOnce() {
    this._location.back();
  }


  ngOnInit(): void {

  }

}
