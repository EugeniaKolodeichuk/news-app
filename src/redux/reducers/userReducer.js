const defaultState = {
  userName: '',
};

const ADD_USER_NAME = 'ADD_USER_NAME';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER_NAME:
      console.log(action);
      return { ...state, userName: action.payload };

    default:
      return state;
  }
};

export const addUserNameAction = payload => ({ type: ADD_USER_NAME, payload });
