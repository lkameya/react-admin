import { all } from 'redux-saga/effects';
import { userSagas } from './users/sagas';

export default function* rootSaga() {
  yield all([
    ...userSagas,
  ])
};
