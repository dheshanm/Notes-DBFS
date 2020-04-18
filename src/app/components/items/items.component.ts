import { Component, OnInit } from '@angular/core';

import { FirebaseItemService } from '../../services/firebase-item.service'
import { Note } from '../../models/note'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Note[];

  // Editing
  isEditing: boolean = false;
  noteToEdit: Note 

  constructor(private itemService: FirebaseItemService) { }

  ngOnInit(): void {
    this.itemService.getNotes().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
  }

  deleteItem(event, item: Note): void {
    //console.log(`deleteItem(${event},${item.id}) Triggered`);
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Note): void {
    this.isEditing = true;
    this.noteToEdit = item;
  }

  updateItem(item: Note): void {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState(): void {
    this.isEditing = false;
    this.noteToEdit = null;
  }

}
