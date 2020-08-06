import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { LogRed } from './reducers/login.reducer';
import { HeaderComponent } from './header/header.component';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    StoreModule.forRoot({
      logState:LogRed,
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
