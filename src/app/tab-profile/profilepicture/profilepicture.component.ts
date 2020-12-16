import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-profilepicture',
  templateUrl: './profilepicture.component.html',
  styleUrls: ['./profilepicture.component.scss'],
})
export class ProfilepictureComponent implements OnInit {
  imageURL: string;
  constructor(private pop: PopoverController) { }

  ngOnInit() {}

  // fileChanged(event: Event){
  // const files = event.target.files;
   // const data = new FormData();
    // data.append('file', files[0]);
    // data.append('UPLOADCARE_STORE', '1');
    // data.append('UPLOADCARE_PUB_KEY', '34f74865b4796a4859e7');
    // this.http.post('https://upload.uploadcare.com/base/', data).toPromise().then( event => {
  // this.imageURL = JSON.stringify(event.json.files);
    // });
    // this.pop.dismiss();
  }


