import {spawn} from 'redux-saga/effects'
import userLoadListSaga from './user-sagas/userLoadListSaga'

const sagas = function* sagas(){
  yield spawn(userLoadListSaga)
}

export default sagas