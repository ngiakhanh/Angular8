import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() link = new EventEmitter<string>();
recipe = "recipe";
shoppingList = "shoppingList";
  constructor() { }

  ngOnInit() {
  }

  onNavigation(event: MouseEvent) {
    var id = (event.target as HTMLInputElement).getAttribute("id");
    this.link.emit(id);
  }
}
