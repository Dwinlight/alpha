import { Component, OnInit } from '@angular/core';
import {RetourDTO} from "../DTOs/RetourDTO";
import {RetourService} from "../services/retour.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  index: number = null;
  retours: RetourDTO[];
  retoursOrderByDate: RetourDTO[];
  retoursOrderByMail: RetourDTO[];
  constructor(private retourService: RetourService ,  private router: Router) {

  }

  ngOnInit() {
    this.retourService.getRetours();
    this.retours = this.retourService.retours;
  }

  onOrderByMail() {
    this.retours.sort((a, b) => a.mail.localeCompare(b.mail));
  }
  onOrderByDate() {
    this.retours.sort((a, b) => a.compareTo(b));
  }

  onDelete(retour: RetourDTO, i: number) {
    this.retourService.remove(retour);
    this.retours.splice(i, 1);
    console.log(retour);
  }
 /* onViewClient(client: ClientDTO) {
    console.log(this.colis);
    this.index = this.clients.indexOf(client);
  }*/

  /*getNumber() {
    this.nbrColis =  new Array(this.clients.length).fill(0);
    for (let i = 0; i < this.colis.length; i++) {
      console.log('ok');
      if (this.colis[i].depart !== 'N/A') {
        const dateString = this.colis[i].depart.split('-');
        const departDate = new Date(+dateString[0], +dateString[1], +dateString[2]);
        const today = new Date();
        if (departDate > today) {
          this.nbrColis[this.colis[i].idEntreprise]++;
        }
      } else {
        this.nbrColis[this.colis[i].idEntreprise]++;
      }
    }
    console.log(this.nbrColis);
  }
  onRemove(client: ClientDTO) {
    this.clientsService.removeClient(client);
    alert('Client ' + client.entreprise + ' a bien été supprimé');
    this.backUpClients = this.clients;
    this.signupForm = this.formBuilder.group({
      search: ['']
    });
    this.index = null;
  }
  onBackDashboard() {
    console.log('back');
    this.index = null;
    this.isCreated = false;
    this.isModify = false;
  }
  onModify() {
    console.log('modify');
    this.isModify = true;
    this.isCreated = false;
  }

  search(key: string) {
    this.backUpClients = [];
    if (key === '') {
      this.backUpClients = this.clients;
    } else {

      for (const value of this.clients) {
        console.log(key);
        console.log(value.entreprise);
        if (value.entreprise.toLowerCase().search(key.toLowerCase()) !== -1) {
          this.backUpClients.push(value);
        }
      }
    }
  }


  ngOnDestroy(): void {
    this.clientsSubscription.unsubscribe();
  }
  onSubmit() {
    this.search(this.signupForm.get('search').value);
  }*/

}
