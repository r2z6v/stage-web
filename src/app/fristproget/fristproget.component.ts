import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fristproget',
  templateUrl: './fristproget.component.html',
  styleUrls: ['./fristproget.component.scss']
})
export class FristprogetComponent implements OnInit {
  
ez = "sd"

  constructor() { }

  ngOnInit(): void {
  }
hey(ar){
  alert(ar)
}
}
