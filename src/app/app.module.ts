import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  //['blockquote', 'code-block', { align: [] }],
  //[{ align: [] }],

  //[{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  //[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  //[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  //[{ direction: 'rtl' }], // text direction

  //[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  //[{ header: [1, 2, 3, 4, 5, 6, false] }],

  //[{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //[{ font: [] }],

  //['link', 'image', 'video'],

  ['clean'], // remove formatting button
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar: toolbarOptions,
        history: {
          delay: 2000, // changes performed in 2000ms are considered single change for undo
          maxStack: 100, // maximum number of total changes allowed to be undone
          userOnly: true,
        },
      },
      theme: 'snow',
    }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
