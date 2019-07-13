import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { UserTypes } from './types';

export function* loadUsers() {
  try {
    const response = yield call(api.get, 'users');
    yield put({ type: UserTypes.LOAD_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({ type: UserTypes.LOAD_FAIL, payload: error });
  }
}

export const userSagas = [
  takeLatest(UserTypes.LOAD_REQUEST, loadUsers),
];
