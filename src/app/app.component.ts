import { Component, ElementRef, ViewChild } from '@angular/core';

import { OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill/public-api';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'pdfmake/build/pdfmake';
import Quill from 'quill';
const pdfMake = window["pdfMake"];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  // editorContent = '';
  
  // addTextBox(){
  //   console.log('addTextBox getting called');
  //   // this.editorContent = this.editorContent + `<input type='textbox'>`
  //   // this.editorContent = this.editorContent + `<strong>Hello People</strong>`
  //   this.editorContent = this.editorContent + `<span class="textbox">__________<span>`
  // }

  ngOnInit(){
    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ];

    let quill = new Quill('#main-editor', {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow',
      placeholder: 'Enter your content here...'
    });
  }
  
}
