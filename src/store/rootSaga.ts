import { all } from 'redux-saga/effects'

function* hello() {}

export default function* rootSaga() {
  yield all([hello()])
}
