import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  group:FormGroup
  ngOnInit(): void {
    this.group =  this.fb.group({
      amount: [''],
      radio:['1'],
      dropdown:['list2']
    }) }
   onSubmit(){
     console.log(this.group.value)
   }
}
