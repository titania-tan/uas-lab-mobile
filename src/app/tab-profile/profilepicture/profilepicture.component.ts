import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {Http} from '@angular/http';

@Component({
  selector: 'app-profilepicture',
  templateUrl: './profilepicture.component.html',
  styleUrls: ['./profilepicture.component.scss'],
})
export class ProfilepictureComponent implements OnInit {
  imageURL: string;
  constructor(private pop: PopoverController,
              private http: Http) { }

  ngOnInit() {}


  fileChanged(event){
    const files = event.target.files;
    const image = new FormData();
    image.append('file', files[0]);
    image.append('UPLOADCARE_STORE', '1');
    image.append('UPLOADCARE_PUB_KEY', '34f74865b4796a4859e7');

    this.http.post('https://upload.uploadcare.com/base/', image).subscribe( event => {
      this.imageURL = event.json().file;
      // JSON.stringify(event.json.file);
    });

  }
  }




