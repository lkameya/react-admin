import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import {
  addUsuarioFailure,
  addUsuarioSuccess,
  editUsuarioFailure,
  editUsuarioSuccess,
  getUsuarioPorIdSuccess,
  loadUsuariosFailure,
  loadUsuariosSuccess,
  showFeedback
} from './actions';
import { UsuarioTypes } from './types';

export function* getUsuarioPorId(action) {
  try {
    const response = yield call(api.get, `usuarios/${action.payload}`);
    yield put(getUsuarioPorIdSuccess(response.data));

  } catch (err) {
  }
}

export function* loadUsuarios() {
  try {
    const response = yield call(api.get, 'usuarios');
    yield put(loadUsuariosSuccess(response.data));
  } catch (err) {
    yield put(loadUsuariosFailure());
  }
}

export function* addUsuario(action) {
  try {
    const response = yield call(api.post, 'usuarios', action.payload);

    yield loadUsuarios();
    yield put(addUsuarioSuccess(response.data));
    yield put(showFeedback());
  } catch (err) {
    yield put(addUsuarioFailure());
    yield put(showFeedback());
  }
}

export function* editUsuario(action) {
  try {

    const response = yield call(api.put, `usuarios`, action.payload);

    yield loadUsuarios();
    yield put(editUsuarioSuccess(response.data));
    yield put(showFeedback());

  } catch (err) {
    yield put(editUsuarioFailure());
    yield put(showFeedback());
  }
}

export const usuarioSagas = [
  takeLatest(UsuarioTypes.LOAD_REQUEST, loadUsuarios),
  takeLatest(UsuarioTypes.ADD_REQUEST, addUsuario),
  takeLatest(UsuarioTypes.EDIT_REQUEST, editUsuario),
  takeLatest(UsuarioTypes.GET_USUARIO_POR_ID, getUsuarioPorId),
];