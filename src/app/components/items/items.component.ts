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

  constructor(private itemService: FirebaseItemService) { }

  ngOnInit(): void {
    this.itemService.getNotes().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
  }

}
