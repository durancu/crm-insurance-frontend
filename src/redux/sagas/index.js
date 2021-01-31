import {spawn} from 'redux-saga/effects'
import userLoadListSaga from './user-sagas/userLoadListSaga'
import userCreateSaga from './user-sagas/userCreateSaga'

const sagas = function* sagas(){
  yield spawn(userLoadListSaga)
  yield spawn(userCreateSaga)
}

export default sagas