import {
    Component, OnInit, Directive, forwardRef,
    Attribute, OnChanges, SimpleChanges, Input
  } from '@angular/core';
  import {
    FormsModule, ReactiveFormsModule, NG_VALIDATORS, Validator,
    AbstractControl, ValidatorFn
  } from '@angular/forms';
  import { FormBuilder, FormGroup, FormControl, Validators, Form, NgForm } from '@angular/forms';
  
  
  
  export interface IWord {
  
  
  
  }
  @Component({
    selector: 'app-home',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
  })
  export class EmployeeComponent implements OnInit {
  
    ngOnInit() {
  
  
    }
  
  
  }
  