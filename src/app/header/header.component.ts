import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {shrinkedMenuTrigger, textStateTrigger} from "../shared/animation";
import { notificationTrigger} from "./animation";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../assets/css/fa.css'],
  animations: [
    shrinkedMenuTrigger,
    notificationTrigger,
    textStateTrigger
  ]
})
export class HeaderComponent implements OnInit {
  userLogin = false;
  shrinked = false;
  notification = false;
  hovered = false;
  hidden = false;
  sidebar = false;
  showNoti = true;
  win = window;
  @Output() shrinkedEmit = new EventEmitter<boolean>();
  @Output() showSidebar = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.showNoti = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if(window.innerWidth < 768) {
      this.hidden = false;
      this.shrinked = false;
      this.shrinkedEmit.emit(this.shrinked);
      this.showNoti = false;
    }else{
      this.sidebar = false;
      this.showSidebar.emit(this.sidebar);
      this.showNoti = true;
    }
  }

  onShrink() {
    setTimeout(() => {
      this.hidden = !this.hidden;
    },100);
    this.shrinked = !this.shrinked;
    this.shrinkedEmit.emit(this.shrinked);
  }

  @HostListener('window:click', ['$event'])
  onClick(event) {
    if (event.target.classList.contains('user')) {
      if (this.userLogin) {
        this.userLogin = false;
      } else {
        this.userLogin = true;
      }
      this.notification = false;
    } else if (event.target.classList.contains('notification')) {
      this.userLogin = false;
      if (this.notification) {
        this.notification = false;
      } else {
        this.notification = true;
      }
    } else {
      this.userLogin = false;
      this.notification = false;
    }
  }
  onShowSidebar() {
    this.showNoti = false;
    this.sidebar = !this.sidebar;
    this.showSidebar.emit(this.sidebar);
  }
  onShowNoti() {
    this.showNoti = !this.showNoti;
    this.sidebar = false;
    this.showSidebar.emit(this.sidebar);
  }
}
