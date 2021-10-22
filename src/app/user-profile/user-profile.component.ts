import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  @Output() userProf = new EventEmitter<NgForm>();

  ngOnInit(): void {}

  onSubmit (form: NgForm) {
    this.userProf.emit(form.value);
  }
}
