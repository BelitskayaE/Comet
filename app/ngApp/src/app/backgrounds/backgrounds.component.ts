import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.css']
})
export class BackgroundsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeBackground() {
  }
}

/*
var c = document.querySelector('#payt2');
c.onclick = function() {
  if (c.checked) {
    document.body.style.background = 'url(../images/day_background.jpg)';
  } else {
    document.body.style.background = 'url(../images/night_background.jpeg)';
  }
}*/
