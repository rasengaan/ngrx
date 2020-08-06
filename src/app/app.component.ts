import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngrx';
  state:any;
	login:boolean;
	constructor(private store:Store, private router:Router) {
		this.state = store.source;
		this.login = this.state.value.logState.loginstate;
	}
}
