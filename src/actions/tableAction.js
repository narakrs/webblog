import * as Types from '../constants/TableTypes';

export const fetchTable = () => {
  return {
    type: Types.TABLE,
  };
};
export const fetchCreateTable = data => {
  return {
    type: Types.TABLE_CREATE,
    payload: data,
  };
};
export const fetchUpdateTable = () => {
  return {
    type: Types.TABLE_UPDATE,
  };
};
export const fetchTableSuccess = data => {
  return {
    type: Types.TABLE_SUCCESS,
    payload: data,
  };
};
export const fetchTableFail = error => {
  return {
    type: Types.TABLE_FAIL,
    payload: error,
  };
};
export const fetchCreateTableSuccess = data => {
  return {
    type: Types.TABLE_CREATE_SUCCESS,
    payload: data,
  };
};
export const fetchCreateTableFail = error => {
  return {
    type: Types.TABLE_CREATE_FAIL,
    payload: error,
  };
};
export const fetchUpdateTableSuccess = data => {
  return {
    type: Types.TABLE_UPDATE_SUCCESS,
    payload: data,
  };
};
export const fetchUpdateTableFail = error => {
  return {
    type: Types.TABLE_UPDATE_FAIL,
    payload: error,
  };
};
