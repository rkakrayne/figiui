import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StockdetailsComponent } from './stockdetails/stockdetails.component';

const routes: Routes = [
  { path: '', component: StockdetailsComponent },
{ path: 'stockdetail', component: StockdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
