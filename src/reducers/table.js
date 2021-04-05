import * as Types from './../constants/TableTypes';

const initialState = {};
const myreducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case Types.TABLE:
      return { ...state };
    case Types.TABLE_SUCCESS:
      return { ...state, data: payload };
    case Types.TABLE_CREATE:
      return { ...state, status: 'create' };
    case Types.TABLE_CREATE_SUCCESS:
      return { ...state, status: 'create susses' };
    case Types.TABLE_CREATE_FAIL:
      return { ...state, status: 'create error' };
    case Types.TABLE_UPDATE:
      return { ...state, status: 'edit' };
    case Types.TABLE_UPDATE_SUCCESS:
      return { ...state, status: 'edit susses' };
    case Types.TABLE_UPDATE_FAIL:
      return { ...state, status: 'edit error' };
    default:
      return state;
  }
};

export default myreducer;
