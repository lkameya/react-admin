import { action } from 'typesafe-actions';
import { UsuarioTypes } from './types';

export const loadUsersRequest = () => action(UsuarioTypes.LOAD_REQUEST);