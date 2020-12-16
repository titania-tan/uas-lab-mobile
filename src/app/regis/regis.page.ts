import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {AlertController} from '@ionic/angular';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {

  email: string;
  password: string;
  cpassword: string;
  loadingUp: boolean;
  currentUser: any;

  constructor(public faAuth: AngularFireAuth,
              private router: Router,
              private alertCtrl: AlertController,
              private userService: UserService) { }

  ngOnInit() {
    this.faAuth.onAuthStateChanged((user) => {
      // console.log('===user', user);
      if (user) {
        console.log('login', user.uid);
        this.userService.storeLoggedUser(user.uid);
        this.router.navigateByUrl('home/home/tab-main');
        this.currentUser = user;
        this.userService.setLoggedInUser(user?.uid, user?.email);
      }
    });
  }

  goLogin(){
    this.router.navigateByUrl('/login');
  }

  async regis(){
    const { email, password, cpassword } = this;
    if ( cpassword !== password){
      console.log('password dont match');
    }
    try {
      const result = await this.faAuth.createUserWithEmailAndPassword(email + '', password);
      this.router.navigateByUrl('home/home/tab-main');
      console.log(result);
      await this.showAlert('Success!', 'welcome!');
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
