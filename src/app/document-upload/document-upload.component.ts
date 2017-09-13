import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
  }

  imageUploaded(event, text) {
    const reader = new FileReader();
    const image = this.element.nativeElement.querySelector(text);
    reader.onload = function (e: any) {
      console.log(image);
      const src = e.target.result;
      image.src = src;
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  onSubmit(){
    
  }

}
