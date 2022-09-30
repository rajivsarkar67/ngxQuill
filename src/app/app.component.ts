import { Component, ElementRef, ViewChild } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('htmlData') htmlData!: ElementRef;
  editorContent = '';
  replacedContent = '';
  myarr : number[] = [];
  count = 0;

  addTextBox(){
    this.editorContent = this.editorContent + '<span class="dynamicField">_______________</span>';
    this.myarr.push(1);
  }
  replaceText(){
    this.editorContent = this.editorContent.replace('_______________', this.replacedContent);
  }
  countTextBoxes(){
    this.count = (this.editorContent.match(/_______________/g) || []).length;
    console.log(this.count);
  }
}
