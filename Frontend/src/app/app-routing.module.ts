import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import { AddNewMemberComponent } from './components/add-new-member/add-new-member.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'member', component: MemberComponent},
  {path:'addnewmember',component:AddNewMemberComponent}
];
>>>>>>> f9998e5 (Admin Dashboard partially done)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
