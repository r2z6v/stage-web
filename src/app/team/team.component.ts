import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
card=[
  {Titolo: "Titolo", Descrizione:"Descrizione", Footer:"Footer", Img:"assets/11.jpg", Attivo:true},
  {Titolo: "Titolo1", Descrizione:"Descrizione1", Footer:"Footer1", Img:"assets/22.jpg", Attivo:true},
  {Titolo: "Titolo2", Descrizione:"Descrizione2", Footer:"Footer2", Img:"assets/mary_jane.jpg",  Attivo:true, href:"https://www.dncsrl.com/"},
]
  constructor() { }

  ngOnInit(): void {
  }

}


