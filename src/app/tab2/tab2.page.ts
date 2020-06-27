import { Component } from '@angular/core';
import { Historico } from '../models/Historico';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  public historicos: Historico[] = [
    { dataHora: "21/06/2020 18:30", leitura: "www.google.com"},
    { dataHora: "22/06/2020 18:40", leitura: "www.youtube.com"},
    { dataHora: "23/06/2020 18:50", leitura: "www.facebook.com"},
    { dataHora: "24/06/2020 19:00", leitura: "www.web.whatsapp.com"},
    { dataHora: "25/06/2020 19:10", leitura: "www.twitter.com"}
  ]

}
