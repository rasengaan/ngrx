import { createReducer, on, On, State, Action } from '@ngrx/store';
import { login, logout } from '../actions/login.action';
import { loginstate } from '../model/ngrx.model';
import * as LoginAction from '../actions/login.action'; 

export const initialstate:loginstate ={
    'loginstate':false,
}

export const loginReducer=createReducer(
    initialstate, 
    on(login, state=>({...state, loginstate:true})),
    on(logout, state=>({...state, loginstate:false})),
    );

export function LogRed(state: loginstate | undefined, action:Action){
    console.log(state);
    return loginReducer(state,action);
} 