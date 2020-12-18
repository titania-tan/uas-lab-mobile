import { Injectable } from '@angular/core';

// tslint:disable-next-line:class-name
interface user {
    name: string;
    uid: string;
}

@Injectable()
export class UserService{
    private user: user;

    constructor(){

    }

    setUser(user: user){
        this.user = user;
    }

    getUID(){
        return this.user.uid;
    }
}


