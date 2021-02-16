import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
 // changeDetection:ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {
public Employees:any
public subscribedEmp:any
  constructor(private service:EmpService) { }

  ngOnInit(): void {
   this.subscribedEmp=  this.service.getEmployee().subscribe((data)=>{
   console.log('from DB', data);
   this.Employees =data
   
    })
  }

}
