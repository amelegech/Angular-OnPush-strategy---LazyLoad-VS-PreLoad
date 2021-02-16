import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-dtails',
  templateUrl: './employee-dtails.component.html',
  styleUrls: ['./employee-dtails.component.css']
})
export class EmployeeDtailsComponent implements OnInit {
  //empInfo:any
  constructor(private router: Router) { 
    //this.empInfo = this.router.getCurrentNavigation().extras.state.empDetail;
  }

  ngOnInit(): void {
  }

}
