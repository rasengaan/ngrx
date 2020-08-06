import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, logout } from '../actions/login.action';
import { loginstate } from '../model/ngrx.model'
import { logstate } from './../app.state';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators'
@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

	constructor(private store: Store) { }

	state:loginstate={
		loginstate:true  
	}
	logout:loginstate={
		loginstate:false
	}
		loginForm:FormGroup;
	ngOnInit(): void {
		this.loginForm=new FormGroup({
			username:new FormControl('',Validators.required),
			password:new FormControl('',Validators.required)
		});
	}
	
	submit(){
		console.log("submitting")
	//  CALLING ACTION TO CHANGE STATE OF LOGIN
	this.store.dispatch(login({ loginstate:{loginstate:true} }));
	
	this.store.select("logState").subscribe((data)=>{
		console.log("subscription");
		console.log(data);
	});
//	this.store.select()
		//reaading from store
		let tutorial = this.store.pipe(
			//can change store variables here
			map(state=> console.log(state)
		));

			//read direct value from source
		console.log(this.store.source.value);

		console.log(this.store.select(map(sts =>{
			console.log(sts)
		})));

		console.log("changing state");
		this.store.dispatch(logout({ loginstate:this.logout }));


	}

}
	