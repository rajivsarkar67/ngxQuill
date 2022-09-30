import { Component, ElementRef, ViewChild } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill/public-api';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Route, Routes } from '@angular/router';
import {Router} from '@angular/router';

import 'pdfmake/build/pdfmake';
import { TitleStrategy } from '@angular/router';
const pdfMake = window["pdfMake"];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('htmlData') htmlData!: ElementRef;
  editorContent = '';

  newestTry(){
    console.log('newest try getting called');
    let data: any = document.getElementsByClassName('ql-container')[0];
    this.generatePdf(data);
  }

  generatePdf(htmlContent:any){
    html2canvas(htmlContent).then(canvas => {
      let imgWidth = 290;
      let imgHeight = (canvas.height * imgWidth)/canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p','mm','a4');
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('demo.pdf');
    })
  }
}
