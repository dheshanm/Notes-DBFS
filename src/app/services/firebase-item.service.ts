import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Note } from '../models/note'

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseItemService {
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;
  noteDoc: AngularFirestoreDocument<Note>;

  constructor(public afs:AngularFirestore) {
    this.notesCollection = this.afs.collection('notes', ref => ref.orderBy('title', 'asc'));

    // Mapping the ID to the model using 'map' and 'pipe'
    //this.notes = this.notesCollection.valueChanges();
    this.notes = this.notesCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Note;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getNotes() {
    return this.notes;
  }

  addItem(item: Note) {
    this.notesCollection.add(item)
  }

  deleteItem(item: Note) {
    this.noteDoc = this.afs.doc(`notes/${item.id}`);
    this.noteDoc.delete();
  }
};


