import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import {RetourDTO} from "../DTOs/RetourDTO";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class RetourService {
  retoursSubject = new Subject<RetourDTO[]>();
  retours: RetourDTO[] = [];
  db = firebase.firestore();
  constructor() {
    this.getRetours();
  }
  emitRetour() {
    this.retoursSubject.next(this.retours);
  }
  saveRetours() {
    firebase.database().ref('/retours').set(this.retours);
  }
  remove(retour: RetourDTO) {
    this.db.collection('retours').doc(retour.id).delete();
  }
  makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getRetours() {
    const t: RetourDTO[] = [];
    this.db.collection('retours').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        const retour = new RetourDTO();
        retour.id = doc.id;
        retour.mail = doc.data().mail;
        retour.name = doc.data().name;
        retour.question1 = doc.data().question1;
        retour.date = doc.data().date;
        retour.heure = doc.data().heure;
        t.push(retour);
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data().mail);
      });
    });
    this.retours = t;
  }
  createNewRetour(newRetour: RetourDTO) {
    this.db.collection("retours").doc(this.makeid(20)).set({
      question1: newRetour.question1,
      name: newRetour.name,
      mail: newRetour.mail,
      date: newRetour.date,
      heure: newRetour.heure
    })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });

  }
}
