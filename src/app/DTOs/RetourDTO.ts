export class RetourDTO {
  constructor(id?: string, mail?: string, name?: string, question1?: string, date?: string, heure?: string) {
    this.id = id;
    this.mail = mail;
    this.name = name;
    this.question1 = question1;
    this.date = date;
    this.heure = heure;
  }
  id?: string;
  mail: string;
  name: string;
  question1: string;
  date: string;
  heure: string;
  compareTo(retour: RetourDTO) {
    const date1 = retour.date.split('/');
    const date2 = this.date.split('/');
    if (date1[2] > date2[2]) {
      return 1;
    }
    if (date1[2] < date2[2]) {
      return -1;
    }
    if (date2[1] > date1[1]) {
      return -1;
    }
    if (date2[1] < date1[1]) {
      return 1;
    }
    if (date2[0] > date1[0]) {
      return -1;
    }
    if (date2[0] < date1[0]) {
      return 1;
    }
    return 0;
  }
}
