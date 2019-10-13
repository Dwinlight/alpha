import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {RetourService} from './services/retour.service';
import {RetourDTO} from './DTOs/RetourDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor( private router: Router) {
    const config = {
      apiKey: 'AIzaSyAwKeO4-C5OMISdRD5ERzWkfhQA31fkBIo',
      authDomain: 'juniorerp-9416f.firebaseapp.com',
      databaseURL: 'https://juniorerp-9416f.firebaseio.com',
      projectId: 'juniorerp-9416f',
      storageBucket: 'juniorerp-9416f.appspot.com',
      messagingSenderId: '925328476223'
    };
    firebase.initializeApp(config);
  }

}



