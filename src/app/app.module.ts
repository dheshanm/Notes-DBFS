import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Forms
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase and Firestore Imports
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// Services
import {FirebaseItemService} from './services/firebase-item.service';

import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddNoteComponent } from './components/add-note/add-note.component'

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
