import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-bcrypt';

  userprof: any;
  jobprof:any;

  getUserProf (form: any) {
    const salt = bcrypt.genSaltSync(10);
    form.password = bcrypt.hashSync(form.password, 10);
    this.userprof = form;
    
  }

  getJobProf (form: any) {
    this.jobprof = form;
  }
}
