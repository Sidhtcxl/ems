import {Component, HostListener, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnChanges {
  width = '1082px';
  @Input() shrinked: boolean;
  constructor() {
  }

  ngOnInit() {
    if(window.innerWidth >= 768){
      this.width = window.innerWidth - 284 + 'px';
    }
    else
      this.width = '100%';
  }
  @HostListener('window:resize')
  onResize() {
    if(window.innerWidth >= 768){
      this.width = window.innerWidth - 284 + 'px';
    }
    else
      this.width = '100%';
  }
  ngOnChanges(changes: any){
    console.log(changes);
    if(changes.shrinked.currentValue && window.innerWidth >= 768) {
      this.width = window.innerWidth - 77 + 'px';
    }else if(!changes.shrinked.currentValue && window.innerWidth >= 768) {
      this.width = window.innerWidth - 284 + 'px';
    }
  }
}
