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

  constructor(public faAuth: AngularFireAuth,
              private router: Router,
              private alertCtrl: AlertController,
              private userService: UserService) { }

  ngOnInit() {
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
    } catch (err){
      console.dir(err);
      if (err.code === 'auth/user-not-found'){
        console.log('user not found');
      }
      if (err.code === 'auth/invalid-email'){
        console.log('the email address id badly formatted');
      }
    }
  }

}
