import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {ProfilepictureComponent} from './profilepicture/profilepicture.component';


@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
})
export class TabProfilePage implements OnInit {
  imageURL: string;
  constructor(private pop: PopoverController) { }

  ngOnInit() {
  }

  dataURLtoFile(dataurl, filename){
    const arr = dataurl.split('');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--){
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type: mime});
  }

  // fileChanged(event){
  //   const files = event.target.files;
  //   const image = new FormData();
  //   image.append('file', files[0]);
  //   image.append('UPLOADCARE_STORE', '1');
  //   image.append('UPLOADCARE_PUB_KEY', '34f74865b4796a4859e7');

  //  this.http.post('https://upload.uploadcare.com/base/', image).toPromise().then( event => {
  //    this.imageURL = JSON.stringify(event.json.files);
  //  });
  // }

  // upload(){
   // const file = this.dataURLtoFile(this.image, 'file');
 // }

  async popp(event){
  const pop = await this.pop.create({
    component: ProfilepictureComponent,
    event
  });
  return await pop.present();
  }
}
