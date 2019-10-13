import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {RetourDTO} from "../DTOs/RetourDTO";
import {Router} from "@angular/router";
import {RetourService} from "../services/retour.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  NON_STATISFAIT = 'assets/images/non.png';
  NON_STATISFAIT_SELECT = 'assets/images/non_select.png';
  TRES_MOYEN_SATISFAIT = 'assets/images/tres_moyen.png';
  TRES_MOYEN_SATISFAIT_SELECT = 'assets/images/tres_moyen_select.png';
  MOYEN = 'assets/images/moyen.png';
  MOYEN_SELECT = 'assets/images/moyen_select.png';
  SATISFAIT = 'assets/images/satisfait_moyen.png';
  SATISFAIT_SELECT = 'assets/images/satisfait_moyen_select.png';
  TRES_SATISFAIT = 'assets/images/tres_satisfait.png';
  TRES_SATISFAIT_SELECT = 'assets/images/tres_satisfait_select.png';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  nonSatisfait = [this.NON_STATISFAIT, this.NON_STATISFAIT, this.NON_STATISFAIT];
  tresmoyen = [this.TRES_MOYEN_SATISFAIT, this.TRES_MOYEN_SATISFAIT, this.TRES_MOYEN_SATISFAIT];
  moyen = [this.MOYEN_SELECT, this.MOYEN_SELECT, this.MOYEN_SELECT];
  satisfait = [this.SATISFAIT, this.SATISFAIT, this.SATISFAIT];
  tresSatisfait = [this.TRES_SATISFAIT, this.TRES_SATISFAIT, this.TRES_SATISFAIT];
  question1 = 0;
  constructor(private _formBuilder: FormBuilder, private retourService: RetourService) { }

  satisfation(i: number, j: number) {
    switch (i) {
      case 0: {
        this.question1 = -2;
        this.nonSatisfait[j] = this.NON_STATISFAIT_SELECT;
        this.tresmoyen[j] = this.TRES_MOYEN_SATISFAIT;
        this.moyen[j] = this.MOYEN;
        this.satisfait[j] = this.SATISFAIT;
        this.tresSatisfait[j] = this.TRES_SATISFAIT;
        break;
      }
      case 1: {
        this.question1 = -1;
        this.nonSatisfait[j] = this.NON_STATISFAIT;
        this.tresmoyen[j] = this.TRES_MOYEN_SATISFAIT_SELECT;
        this.moyen[j] = this.MOYEN;
        this.satisfait[j] = this.SATISFAIT;
        this.tresSatisfait[j] = this.TRES_SATISFAIT;
        break;
      }
      case 2: {
        this.question1 = 0;
        this.nonSatisfait[j] = this.NON_STATISFAIT;
        this.tresmoyen[j] = this.TRES_MOYEN_SATISFAIT;
        this.moyen[j] = this.MOYEN_SELECT;
        this.satisfait[j] = this.SATISFAIT;
        this.tresSatisfait[j] = this.TRES_SATISFAIT;
        break;
      }
      case 3: {
        this.question1 = 1;
        this.nonSatisfait[j] = this.NON_STATISFAIT;
        this.tresmoyen[j] = this.TRES_MOYEN_SATISFAIT;
        this.moyen[j] = this.MOYEN;
        this.satisfait[j] = this.SATISFAIT_SELECT;
        this.tresSatisfait[j] = this.TRES_SATISFAIT;
        break;
      }
      case 4: {
        this.question1 = 2;
        this.nonSatisfait[j] = this.NON_STATISFAIT;
        this.tresmoyen[j] = this.TRES_MOYEN_SATISFAIT;
        this.moyen[j] = this.MOYEN;
        this.satisfait[j] = this.SATISFAIT;
        this.tresSatisfait[j] = this.TRES_SATISFAIT_SELECT;
        break;
      }
    }
    console.log(this.question1);
  }

  envoyer(form: NgForm) {
    console.log(form.value.name);

    const retour = new RetourDTO();
    retour.question1 = '' + this.question1;
    if (form.value.name === '') {
      retour.name = '<i> Non renseigné</i>';
    } else {
      retour.name = form.value.name;
    }
    if (form.value.name === '') {
      retour.mail = '<i> Non renseigné</i>';
    } else {
      retour.mail = form.value.mail;
    }
    console.log(retour);
    this.retourService.createNewRetour(retour);
    setTimeout(() => window.location.reload(), 2500);
  }


  ngOnInit() {

  }

}
