import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  nonSatisfait = ["../non.png", "../non.png","../non.png","../non.png","../non.png"];
  tresmoyen1 = "../tres_moyen.png";
  moyen1 = "../moyen.png";
  satisfait1 = "../satisfait_moyen.png";
  tresSatisfait1 = "../tres_satisfait";

  constructor(private _formBuilder: FormBuilder) {}

  satisfation(i: number, j: number) {
      if ( i === 1 ) {
        //this.image1 = "https://img.icons8.com/android/96/000000/lol.png";
        //this.image2 = "https://img.icons8.com/nolan/96/000000/lol.png";
      } else {
        //this.image2 = "https://img.icons8.com/android/96/000000/lol.png";
        //this.image1 = "https://img.icons8.com/nolan/96/000000/lol.png";
      }
  }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}



