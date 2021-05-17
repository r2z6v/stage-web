import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  @Input()pipo;
  @Output() out =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
wee() {
  this.out.emit("ciao")
}
}
