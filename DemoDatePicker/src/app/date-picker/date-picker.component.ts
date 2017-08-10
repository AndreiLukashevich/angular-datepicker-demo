import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

import { IDatePickerConfig } from '../../../node_modules/ng2-date-picker/date-picker/date-picker-config.model';

@Component({
  moduleId: module.id,
  selector: 'app-date-picker',
  templateUrl: 'date-picker.component.html',
  styleUrls: ['date-picker.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DatePickerComponent implements OnInit {

  testForm: FormGroup;

  config: IDatePickerConfig = {
    allowMultiSelect: true,
    format: "MM/DD/YYYY"
  };


  constructor(private router: Router, private fb: FormBuilder) {
  }


  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.testForm = this.fb.group({
      date: []
    });
  }

  goToPickers() {
    this.router.navigate(["pickers"]);
  }

}
