import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { StoreModule } from '@ngrx/store';
import { LogRed } from './reducers/login.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    ReactiveFormsModule,
    StoreModule.forRoot({
      logState: LogRed,
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
