import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userprof: any;
}
