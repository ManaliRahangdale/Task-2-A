import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.css']
})
export class DropdownFormComponent implements OnInit {
  dropdownFormObj : FormGroup | any;
  // dropDownControl = new FormControl('');
  // showformField = false;
  ngOnInit(): void {
   this.dropdownFormObj = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    contactDetails : new FormGroup({
      contactMethod : new FormControl(''),
      phoneNo : new FormControl('',Validators.required),
      emailId : new FormControl('',Validators.required)
    })
   })
  }
  // onDropDownChnage(){
  //   const selectedOption = this.dropDownControl.value;
  //   this.showformField = (selectedOption === 'email')
  // }
  onSubmit(){
    console.log(this.dropdownFormObj.value)
    // this.dropdownFormObj.reset()
  }

}
