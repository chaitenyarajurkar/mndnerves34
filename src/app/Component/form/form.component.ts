import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Items } from 'src/app/Items';
import { ItemsActionTypes } from 'src/app/items.actions';
import * as ItemsActions  from '../../items.actions';
import * as fromItems from '../../items.selectors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data:any=[];
  obje:any={};
  flag:boolean=true;
  itemModel:Items[]=[];
  constructor( private store:Store) { 
    if(localStorage.getItem("allData")){
      let dataFromls=localStorage.getItem("allData")
         this.data=JSON.parse(dataFromls);
         this.flag=false;
       }
    
  }

  ngOnInit(): void {
    this.store.dispatch(new ItemsActions.LoadItemss());

    this.store.pipe(select(fromItems.getItems)).subscribe(data=>{
         this.itemModel=data;
    })
   
  }

  submitData(){
    this.data.push(this.obje);
    this.flag=false;
    this.obje={};
    console.log(this.data)
  }

  deleteObj(i){
           this.data.splice(i,1);   
  }
  svaeTols(){
    localStorage.setItem("allData",JSON.stringify(this.data));
  }
  reset(){
    this.data=[];
    localStorage.removeItem("allData");
    this.flag=true;
  }
}
