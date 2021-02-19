import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule, PreloadAllModules } from '@angular/router';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import{EmpService} from './employee/emp.service'
import { MymyService } from './mymy.service';



 const MyRoutes:Routes=[
   {path:"", redirectTo:"home", pathMatch:'full'},
 {path:"home", component:HomeComponent},
{path:'products',
loadChildren:()=>import('./product/product.module').then(p=>p.ProductModule)},
{path:"emps",
loadChildren: ()=>import('./employee/employee.module').then(e=>e.EmployeeModule)},

{path: "Todo", loadChildren: ()=>import('./todo/todo.module').then(t=>t.TodoModule)}
 ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(MyRoutes ,{
      preloadingStrategy: PreloadAllModules
    }),
    HttpClientModule
    
  ],
  providers: [MymyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
