import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  updateForm: FormGroup;
  finalData : any = [];
  singleData: any = {};
  deleteId : any;
  updatedItem: boolean = false;
  deletedItem: boolean = false;
  singleDataDeleted: any = {};

  constructor(
  private myService: MyserviceService,
  private fb: FormBuilder,
  private _router: Router
  ) { }

  ngOnInit(): void {
  		this.getProductList();
  		this.buildForm();	
  }

  buildForm(){
  		this.updateForm = this.fb.group({
  				name: [''],
  				description: ['']
  		})
  }


  getProductList(){

  		this.myService.readAll().subscribe(res=>{
  					this.finalData = JSON.parse(JSON.stringify(res)).data;
  				
  		},err=>{
  		console.log(err);
  		})

  }

  update(id:any){
  		this.deletedItem = false;
  		this.updatedItem = false;

  		this.myService.read(id).subscribe(res=>{
  				this.singleData = JSON.parse(JSON.stringify(res)).data;

  		},err=>{
  				console.log(err);
  		})
  }


  finalSubmit(id:any){

    		let value = this.updateForm.getRawValue();

  			const data = {
  				productName: value.name.length > 0 ? value.name : this.singleData.productName,
  				description: value.description.length > 0 ? value.description : this.singleData.description,
  			}
  			console.log(data,"final submit method")
  			this.myService.update(id,data).subscribe(res=>{
  						console.log(res);
  						this.updatedItem = true;
  						this._router.navigate(['/showProduct'])

  			},err=>{
  						console.log(err);
  			})
  }

  delete(id:any){

  		this.myService.read(id).subscribe(res=>{
  				console.log(res);
  				this.singleDataDeleted = JSON.parse(JSON.stringify(res)).data;
  				console.log(this.singleDataDeleted);

  		},err=>{
  				console.log(err);
  		})

  }

  finalSubmitDelete(id:any){
  			this.myService.delete(id).subscribe(res=>{
  					console.log(res);
  					this.deletedItem = true;

  					this._router.navigate(['/showProduct'])
  			},err=>{
  					console.log(err);
  			})
  }



}
