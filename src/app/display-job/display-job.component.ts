import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-job',
  templateUrl: './display-job.component.html',
  styleUrls: ['./display-job.component.css']
})
export class DisplayJobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() jobprof: any;

}
