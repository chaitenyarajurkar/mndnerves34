import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
      dataArray:any=[];
     dataArray2:any=[{"name":"books","quantity":"123","price":"150","orderno":""},
     {"name":"books","quantity":"13","price":"250","orderno":""},
     {"name":"pen","quantity":"12","price":"550","orderno":""},
     {"name":"chart","quantity":"23","price":"850","orderno":""},
     {"name":"box","quantity":"73","price":"450","orderno":""},
     {"name":"chair","quantity":"03","price":"950","orderno":""}];
     dataArray3:any=[];
 
  constructor() { 
   this.dataArray=JSON.parse(localStorage.getItem("allData"));
   console.log(this.dataArray)
  }

showRecord(i){
 
  for(let x of this.dataArray2){
   
    x.orderno= this.dataArray[i].orderno;
  }
this.dataArray3=this.dataArray2;
}

  ngOnInit(): void {
  }

}
