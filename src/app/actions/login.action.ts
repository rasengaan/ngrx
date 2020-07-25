import { createAction, props, Action } from '@ngrx/store';
import { loginstate } from '../model/ngrx.model';

export const login = createAction(
    '[Login Page] Login',
    props<{ loginstate: loginstate }>()
  );

export const logout = createAction(
    '[Logout Page] Logout',
    props<{ loginstate: loginstate }>()
  );

  export type actions ='[Login Page] Login' | '[Logout Page] Logout'