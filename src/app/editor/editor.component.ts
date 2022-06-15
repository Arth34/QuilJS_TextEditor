import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  quillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']                         // link and image, video
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
