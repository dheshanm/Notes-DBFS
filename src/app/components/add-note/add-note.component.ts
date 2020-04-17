import { Component, OnInit } from '@angular/core';
import { FirebaseItemService } from '../../services/firebase-item.service'

import { Note } from '../../models/note'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  note: Note = {
    title: '',
    description: '',
  }

  constructor(private itemService: FirebaseItemService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.note.title != '' && this.note.description != ''){
      this.itemService.addItem(this.note);

      this.note.title = '';
      this.note.description = '';
    }
  }

}
