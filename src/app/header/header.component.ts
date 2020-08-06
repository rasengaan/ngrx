import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../actions/login.action';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	state:any;
	login:boolean;
	constructor(private store:Store, private router:Router) {
		this.state = store.source;
		this.login = this.state.value.logState.loginstate;
	}

	logout(){
		//server call for logout;
		this.store.dispatch(logout({loginstate:{loginstate:false}}));
		this.router.navigate(['signin']);
	}

	ngOnInit(): void {
	}

}
