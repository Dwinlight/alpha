import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import {RetourDTO} from "../DTOs/RetourDTO";

@Injectable({
  providedIn: 'root'
})
export class RetourService {
  retours: RetourDTO[] = [];
  db = firebase.firestore();
  retoursSubject = new Subject<RetourDTO[]>();
  constructor() {
    console.log('SAV');
  }
  emitRetour() {
    this.retoursSubject.next(this.retours);
  }
  saveRetours() {
    firebase.database().ref('/retours').set(this.retours);
  }
  makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  createNewRetour(newRetour: RetourDTO) {
    this.db.collection("retours").doc(this.makeid(20)).set({
      question1: newRetour.question1,
      name: newRetour.name,
      mail: newRetour.mail
    })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });

    /*this.retours.push(newRetour);
    this.saveRetours();
    this.emitRetour();*/
  }
}
