import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EmployeeComponent } from './employee/employee.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadsComponent } from './leads/leads.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'dash-board',component:DashBoardComponent},
  {path:'',redirectTo:'dash-board',pathMatch:'full'},
  {path:'Employee',component:EmployeeComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'Lead',component:LeadsComponent},
  {path:'Contact',component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
