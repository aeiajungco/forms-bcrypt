import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {

  form = this.fb.group ({
    compName: ['', {
      validators: [Validators.required, Validators.minLength(3)],
      }
    ],
    dept: ['', {
      validators: [Validators.required, Validators.minLength(3)],
      }
    ],
    job: ['', {
      validators: [Validators.required, Validators.minLength(3)],
      }
    ],
    empID: ['', {
      validators: [Validators.required, Validators.minLength(7), Validators.pattern('[0-9]+')],
      }
    ],
    sup: ['', {
      validators: [Validators.required, Validators.minLength(3)],
      }
    ],
  })

  constructor( private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  @Output() jobProf = new EventEmitter<NgForm>();


  onSubmit() {
    this.jobProf.emit(this.form.value);
  }

  get compName () {
    return this.form.controls['compName'];
  }

  get dept () {
    return this.form.controls['dept'];
  }

  get job () {
    return this.form.controls['job'];
  }

  get empID () {
    return this.form.controls['empID'];
  }

  get sup () {
    return this.form.controls['sup'];
  }

}
