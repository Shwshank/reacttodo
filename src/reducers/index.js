import _ from 'lodash';
import { combineReducers } from 'redux';

const getAllUsers = (state=[], action) => {

  switch(action.type) {
    case 'GET_ALL_USERS': {
      state = _.uniqBy(action.payload, 'name')
      return [...state]
    }

    default: {
      return [...state]
    }
  }
}

export default combineReducers({
  getAllUsersReducer: getAllUsers
})
