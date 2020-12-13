import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/user';
  userRef: AngularFireList<User> = null;
  dbRef: any;
  loggedInUser: User;
  private currentUser: string;
  localStorage: Storage;

  constructor(private db: AngularFireDatabase) {
    this.userRef = db.list(this.dbPath);
    this.localStorage = window.localStorage;
  }

  create(user: any, fullName: string): any {
    const { uid , providerData } = user;
    this.dbRef = this.db.database.ref().child('user');
    this.dbRef.child(`${uid}`).set({
      email: providerData[0].email,
      fullName,
      imageUrl: '',
      location: []
    });
  }

  setLoggedInUser(uid: string, email: string) {
    this.loggedInUser = new User();
    this.dbRef = this.db.database.ref('user/' + uid).once('value').then((dataSnapshot) => {
      this.loggedInUser.id = uid;
      this.loggedInUser.name = dataSnapshot.val().fullName || '';
      this.loggedInUser.email = dataSnapshot.val().email || email;
      this.loggedInUser.location = dataSnapshot.val().location || [];
      this.loggedInUser.imageUrl = dataSnapshot.val().imageUrl || [];

      if (this.isLocalStorageSupported) {
        this.localStorage.setItem('user', JSON.stringify(this.loggedInUser));
      }
    });
    console.log(this.loggedInUser);
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }

  storeLoggedUser(uid: string) {
    this.currentUser = uid;
  }
}
