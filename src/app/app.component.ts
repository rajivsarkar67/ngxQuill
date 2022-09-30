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
  // replacedContent = '';
  myarr : number[] = [];
  count = 0;

  addTextBox(){
    this.editorContent = this.editorContent + '<span class="dynamicField">_______________</span>';
    this.myarr.push(1);
  }
  replaceText(myIndex: number){
    console.log(myIndex);
    console.log(this.getPosition(this.editorContent, '_______________', myIndex + 1));
    console.log(this.editorContent[this.getPosition(this.editorContent, '_______________', myIndex + 1)]);
    // this.editorContent = this.editorContent.replace('_______________', this.replacedContent);
    // console.log(id${myIndex}.innerText);
  }
  countTextBoxes(){
    this.count = (this.editorContent.match(/_______________/g) || []).length;
    console.log('count = '+this.count);
  }

  getPosition(string:string, subString:string, index:number) {
    return string.split(subString, index).join(subString).length;
  }

  publish(){
    for(let i=0; i<this.editorContent.length; i++)
      console.log(i, this.editorContent[i]);
  }
}
