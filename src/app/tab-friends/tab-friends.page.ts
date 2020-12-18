import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user/user.service';
import {User} from '../services/user/user';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {FrenlisService} from '../services/frenlis.service';
import {Fren} from '../services/frenlist.modal';

@Component({
  selector: 'app-tab-friends',
  templateUrl: './tab-friends.page.html',
  styleUrls: ['./tab-friends.page.scss'],
})
export class TabFriendsPage implements OnInit {
  user: User;
  uid: string;
  frens: Fren [];
  constructor(private userService: UserService,
              public faAuth: AngularFireAuth,
              private router: Router,
              private frenSer: FrenlisService) { }

  ngOnInit() {
    this.frens = this.frenSer.getFren();
    this.faAuth.onAuthStateChanged((user) => {
      if (!user) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.uid = user.uid;
        this.userService.storeLoggedUser(user.uid);
      }
    });
  }

}
