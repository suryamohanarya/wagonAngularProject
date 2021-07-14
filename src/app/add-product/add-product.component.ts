import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm:FormGroup;
  submitted :boolean = false;
  errMsg: boolean = false;

  constructor(
    private fb:FormBuilder,
    private myService: MyserviceService
  ) { }

  
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
  this.addForm = this.fb.group({
  name:['', [Validators.required]],
  description:['', [Validators.required]]

		})
  }
  add(){
  	this.submitted = false;
  	this.errMsg = false;
    let value = this.addForm.getRawValue();
    const data = {

    	productName : value.name,
    	description: value.description
    }

    if(this.addForm.invalid){
    		this.errMsg = true;
    }

    this.myService.create(data).subscribe(res=>{
    			this.submitted = true;
    },err=>{
    		console.log(err);
    })




  }

}
