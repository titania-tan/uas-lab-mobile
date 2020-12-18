import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  currentUser: any;

  constructor(public faAuth: AngularFireAuth,
              private router: Router,
              private userService: UserService,
              public user: UserService
  ) { }

  ngOnInit() {
    this.faAuth.onAuthStateChanged((user) => {
      // console.log('===user', user);
      if (user) {
        console.log('login', user.uid);
        this.router.navigateByUrl('home/home/tab-main');
        this.currentUser = user;
      }
    });

    }


  async login(){
    const { email, password } = this;
    try {
      const result = await this.faAuth.signInWithEmailAndPassword(email + '', password);

      if (result.user){
        this.user.setUser({
          name,
          uid: result.user.uid
        });
        this.router.navigateByUrl('home/home/tab-profile');
        console.log(result);
      }
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
