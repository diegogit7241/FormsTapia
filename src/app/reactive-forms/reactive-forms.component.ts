import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  userForm: FormGroup;
  constructor( private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      lastName:  ['',Validators.required],
      age:  ['',Validators.required],
      email:  ['',[Validators.required,Validators.email]],
      phone:  ['',[Validators.required,Validators.pattern("^((\\+56-?)|0)?[0-9]{8}$")]]
  });
  }

  onSubmit(): void{
  alert('datos ingresados correctamente');
  }


}
