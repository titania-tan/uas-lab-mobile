import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from '../services/user/user.service';

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
              private userService: UserService
  ) { }

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


  async login(){
    const { email, password } = this;
    try {
      const result = await this.faAuth.signInWithEmailAndPassword(email + '', password);
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
