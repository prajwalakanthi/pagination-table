import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-table-without-pagination',
  templateUrl: './table-without-pagination.component.html',
  styleUrls: ['./table-without-pagination.component.css']
})
export class TableWithoutPaginationComponent implements OnInit {

  title = 'datatables';

  dtOptions: DataTables.Settings = {};

  posts;

 
  constructor(private fetchdata:FetchDataService) { }

  ngOnInit() {
    this.getData();
    this.dtOptions = {

      pagingType: 'full_numbers',

      pageLength: 5,

      processing: true

    };
  }
  getData(){
    this.fetchdata.getData().subscribe(data=>{
      console.log(data);
      this.posts = data['results'];
    });
  }


}
