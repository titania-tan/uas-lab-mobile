import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {AlertController} from '@ionic/angular';
import {UserService} from '../user.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {

  email: string;
  name: string;
  password: string;
  cpassword: string;
  loadingUp: boolean;
  currentUser: any;
  dbRef: any;

  constructor(public faAuth: AngularFireAuth,
              private router: Router,
              private alertCtrl: AlertController,
              private user: UserService,
              public afstore: AngularFirestore
  ) { }

  ngOnInit() {
    this.faAuth.onAuthStateChanged((user) => {
      // console.log('===user', user);
      if (user) {
        console.log('login', user.uid);
        this.router.navigateByUrl('home/home/tab-profile');
        this.currentUser = user;
      }
    });
  }

  goLogin(){
    this.router.navigateByUrl('/login');
  }

  async regis(){
    const { name, email, password, cpassword } = this;
    if ( cpassword !== password){
      console.log('password dont match');
    }
    try {
      const result = await this.faAuth.createUserWithEmailAndPassword(email + '', password);

      this.afstore.doc('users/${result.user.uid}').set({
        name,
        email
      });

      await this.showAlert('Success!', 'welcome!');
      this.router.navigateByUrl('home/home/tab-main');
      console.log(result);

      if (result.user){
        this.user.setUser({
          name,
          uid: result.user.uid
        });

      }
    } catch (err){
      console.dir(err);
      if (err.code === 'auth/user-not-found'){
        console.log('user not found');
        this.showAlert('Error', err.message);
      }
      if (err.code === 'auth/invalid-email'){
        console.log('the email address id badly formatted');
      }
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['ok']
    });

    await alert.present();
  }

}
