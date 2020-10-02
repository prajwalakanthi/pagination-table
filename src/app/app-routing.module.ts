import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableWithPaginationComponent } from './components/table-with-pagination/table-with-pagination.component';
import { TableWithoutPaginationComponent } from './components/table-without-pagination/table-without-pagination.component';


const routes: Routes = [{
  path:"",
  component:HomeComponent,
},
{
  path:"tablewithpagination",
  component:TableWithPaginationComponent,
},
{
  path:"tablewithoutpagination",
  component:TableWithoutPaginationComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
