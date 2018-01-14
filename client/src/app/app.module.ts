import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { GetDataFromServerService } from '../app/services/get-data-from-server.service';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    NgxPaginationModule,
    HttpModule,
    FormsModule
  ],
  providers: [GetDataFromServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
