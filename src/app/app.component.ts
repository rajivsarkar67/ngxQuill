import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('htmlData') htmlData!: ElementRef;
  editorContent = '';
  // replacedContent = '';
  myarr : number[] = [];
  count = 0;

  ngOnInit(){
    // console.log(this.betterReplace('abcxabyz', 'ab', '**',1));
  }

  betterReplace(string: string, search: string, replace: string, from: number) : string{
    // console.log("getting called");
    if(string.length > from){
      return string.slice(0,from) + string.slice(from).replace(search, replace)
    }
    else
      return '';
  }

  addTextBox(){
    this.editorContent = this.editorContent + '<span class="dynamicField">_______________</span>';
    this.myarr.push(1);
  }
  replaceText(myIndex: number, value: string){
    console.log(myIndex);
    console.log(value);
    let positionOfTextBox = this.getPosition(this.editorContent, '_______________', myIndex + 1);
    console.log(positionOfTextBox);
    console.log(this.editorContent[positionOfTextBox]);
    // console.log(id${myIndex}.innerText);
    this.editorContent = this.betterReplace(this.editorContent, '_______________', value, positionOfTextBox);
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
