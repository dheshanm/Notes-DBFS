import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase and Firestore Imports
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { ItemsComponent } from './components/items/items.component';

import {FirebaseItemService} from './services/firebase-item.service'

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'notes-dbfs'),
    AngularFirestoreModule
  ],
  providers: [
    FirebaseItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
