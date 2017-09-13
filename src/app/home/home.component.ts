import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  shrinked = false;
  showSidebar = false;
  onShrink(shrinked: boolean){
    this.shrinked = shrinked;
  }
  onShowSidebar(showSidebar: boolean) {
    this.showSidebar = showSidebar;
  }

}
