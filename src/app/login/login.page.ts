import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public faAuth: AngularFireAuth,
              private router: Router
  ) { }

  ngOnInit() {

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
