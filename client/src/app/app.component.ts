import { Component } from '@angular/core';
import { GetDataFromServerService } from '../app/services/get-data-from-server.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arrayRestaurants: any[];
  searchArray: any[];
  data;
  messageClass;
  errorObject;
  constructor(
    private dataServices: GetDataFromServerService,
    private _flashMessagesService: FlashMessagesService
  ) {
    this.chargerRestaurants();
   }


  chargerRestaurants(){
    this.dataServices.chargerDataRestaurants().subscribe(restos =>{
      console.log(restos);
      if(restos.success){
        this.arrayRestaurants = restos.data;
        this.data=true;
        console.log(this.data);
        console.log('cuisine restaurant :' ,restos.data[0].cuisine);
        console.log('nom restaurant: ', restos.data[0].name);
        //this.arrayUsers = users.message;
      }else{
         this.data = false;
         this.errorObject = restos.message;
         this.messageClass = 'alert alert-danger';
      }
    });
  }

}
