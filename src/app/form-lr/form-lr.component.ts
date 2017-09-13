import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-lr',
  templateUrl: './form-lr.component.html',
  styleUrls: ['./form-lr.component.css']
})
export class FormLRComponent implements OnInit {
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }
}
