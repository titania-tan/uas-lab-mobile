import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {ProfilepictureComponent} from './profilepicture/profilepicture.component';
import {Http} from '@angular/http';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../services/user/user';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';
import firestore = firebase.firestore;


@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
})
export class TabProfilePage implements OnInit {
  imageURL: string;
  desc: string;
  uid: string;
  constructor(private pop: PopoverController,
              private http: Http,
              public faAuth: AngularFireAuth,
              private router: Router,
              public user: UserService,
              public afstore: AngularFirestore) { }

  ngOnInit() {
    this.faAuth.onAuthStateChanged((user) => {
      if (!user) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.uid = user.uid;
      }
    });
  }
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

  signOut() {
    return this.faAuth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  createPost(){
    const image = this.imageURL;
    const desc = this.desc;

    this.afstore.doc('users/${this.user.getUID()}' ).update({
      posts: firestore.FieldValue.arrayUnion({
        image,
        desc
      })
    });
  }

  async popp(event){
  const pop = await this.pop.create({
    component: ProfilepictureComponent,
    event
  });
  return await pop.present();
  }
}
