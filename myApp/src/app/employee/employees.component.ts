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
public inputVal= "Amele"
public filtereVal :any
  constructor(private service:EmpService) { }

  valueHandler($event:any){
      this.inputVal = $event.target.value
      console.log(this.inputVal);
      this.filtereVal = this.Employees.filter((elm:any)=>{
if(elm.name.includes(this.inputVal) ){
  return elm.name
}
      })
      
  }
  ngOnInit(): void {
   this.subscribedEmp=  this.service.getEmployee().subscribe((data)=>{
   console.log('from DB', data);
   this.Employees =data
   
    })
  }

}
