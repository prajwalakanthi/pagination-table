import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableWithoutPaginationComponent } from './components/table-without-pagination/table-without-pagination.component';
import { TableWithPaginationComponent } from './components/table-with-pagination/table-with-pagination.component';
import { FetchDataService } from './services/fetch-data.service';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    TableWithoutPaginationComponent,
    TableWithPaginationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    DataTablesModule, 
    BrowserAnimationsModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
