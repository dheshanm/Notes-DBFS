import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Note } from '../models/note'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseItemService {
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  constructor(public afs:AngularFirestore) {
    this.notes = this.afs.collection('notes').valueChanges();
  }

  getNotes() {
    return this.notes;
  }
};


