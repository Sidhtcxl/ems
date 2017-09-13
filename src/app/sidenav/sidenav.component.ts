import {Component, HostListener, Input, OnInit} from '@angular/core';
import {shrinkedMenuTrigger, slideStateTrigger, textStateTrigger} from '../shared/animation';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../../assets/css/fa.css' , './sidenav.component.css'],
  animations: [
    shrinkedMenuTrigger,
    slideStateTrigger,
    textStateTrigger
  ]
})
export class SidenavComponent implements OnInit {
  @Input() shrinked = false;
  hidden = false;
  dont = true;
  hovered = 'none';
  visible = false;
  @Input() showSidebar = false;
  clickedText = ['Dashboard', 'Product', 'Bill', 'Employee', 'Reports', 'Applicant Details', 'Registration', 'Document'];
  clickedClass = {'fa fa-home': 'Dashboard',
    'fa fa-shopping-basket': 'Product',
    'fa fa-money': 'Bill',
    'fa fa-user-circle-o': 'Employee',
    'fa fa-line-chart': 'Reports',
    'fa fa-delicious': 'Applicant Details',
    'fa fa-id-card-o': 'Document'
  };
  clickedValue = 'none';
  height = '2610px';
  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 768){
      this.dont = false;
      this.height = 'auto';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth >= 768){
      this.dont = true;
      this.height = '2610px';
    }else{
      this.dont = false;
      this.height = 'auto';
    }

  }

  onClick(event) {
    let text = event.target.innerText.trim();
    const className = event.target.className.trim();
    if (this.clickedText.includes(text) || this.clickedClass[className]) {
      if (!this.clickedText.includes(text)) {
        text = this.clickedClass[className];
      }
      if (this.clickedValue !== text && !this.shrinked) {
        this.clickedValue = text;
      } else {
        this.clickedValue = 'none';
      }
    }
  }
  onStart(event) {
    if (event.fromState === 'notShrinked') {
      this.hidden = true;
      this.clickedValue = 'none';
    } else if (event.fromState === 'shrinked') {
      setTimeout(() => {
        this.hidden = false;
      }, 150);
    }
  }
  onEnter(event) {
    const className = event.target.firstElementChild.firstChild.className;
    if (this.shrinked && this.clickedClass[className]) {
      this.hovered = this.clickedClass[className];
    }else {
      this.hovered = 'none';
    }
  }
  onLeave(event) {
    if (this.shrinked) {
      this.hovered = 'none';
    }
  }
}
