import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() link = new EventEmitter<string>();
recipe = 'recipe';
shoppingList = 'shoppingList';
  constructor() { }

  ngOnInit() {
  }

  onNavigation(event: Event) {
    const id = (event.target as HTMLElement).getAttribute('id');
    this.link.emit(id);
  }
}
