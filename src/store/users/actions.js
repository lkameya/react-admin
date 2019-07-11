import { action } from 'typesafe-actions';
import { UserTypes } from './types';

export const loadUsersRequest = () => action(UserTypes.LOAD_REQUEST);