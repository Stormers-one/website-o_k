import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  goToPage(link: string) {
    this.router.navigate(['/facilities/' + link]).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

}
