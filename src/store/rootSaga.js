import { all } from 'redux-saga/effects';
import { usuarioSagas } from './users/sagas';

export default function* rootSaga() {
  yield all([
    ...usuarioSagas,
  ])
};
