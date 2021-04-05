import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as Types from './../constants/ActionTypes';
import * as TableTypes from './../constants/TableTypes';
import {
  fetchLoginSuccess,
  fetchLoginFail,
  filterSuccess,
} from '../actions/loginActions';
import {
  fetchTableSuccess,
  fetchTableFail,
  fetchCreateTableSuccess,
  fetchCreateTableFail,
  fetchTable,
} from '../actions/tableAction';
import { showLoading, hideLoading } from '../actions/uiActions';
import { getList } from '../apis/loginApis';
import { getTable, postTable } from '../apis/tableApi';
import { STATUS_CODE } from './../constants/index';

function* watchFetchLoginAction() {
  while (true) {
    yield take(Types.LOGIN);
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    console.log('s', resp);
    if (status === STATUS_CODE.SUCCESS) {
      console.log('tc');
      yield put(fetchLoginSuccess(data));
    } else {
      console.log('tb');
      yield put(fetchLoginFail(data));
    }
    yield delay(2000);
    yield put(hideLoading());
  }
}
function* watchFilterLogin({ payload }) {
  yield delay(600);
  const list = yield select(state => state.login);
  console.log('state', list);
  yield put(filterSuccess(payload));
}
function* watchFetchTable() {
  yield delay(600);
  const resp = yield call(getTable);
  const { status, data } = resp;
  console.log('get Tables', resp);
  if (status === STATUS_CODE.SUCCESS) {
    console.log('tc');
    yield put(fetchTableSuccess(data.data));
  } else {
    console.log('tb');
    yield put(fetchLoginFail(data));
  }
}
function* watchFetchCreateTable({ payload }) {
  console.log('sjjjj', payload);
  const resp = yield call(postTable, payload);
  const { status, data } = resp;
  console.log('s', resp);
  if (status === STATUS_CODE.SUCCESS) {
    console.log('tc');
    yield put(fetchTable());
    yield put(fetchCreateTableSuccess(data));
  } else {
    console.log('tb');
    yield put(fetchCreateTableFail);
  }
}
function* rootSaga() {
  yield fork(watchFetchLoginAction);
  yield takeLatest(Types.LOGIN_FILTER, watchFilterLogin);
  yield takeLatest(TableTypes.TABLE, watchFetchTable);
  yield takeLatest(TableTypes.TABLE_CREATE, watchFetchCreateTable);
}
export default rootSaga;
