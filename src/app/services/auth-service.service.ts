import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import {Route, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(router: Router) {
  }
  signOutUser() {
    firebase.auth().signOut();
  }
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
