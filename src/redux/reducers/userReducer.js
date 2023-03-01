const defaultState = {
  userName: '',
};

const ADD_USER_NAME = 'ADD_USER_NAME';

export const userReducer = (state = defaultState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_USER_NAME:
      return { ...state, userName: payload };

    default:
      return state;
  }
};

export const addUserNameAction = payload => ({ type: ADD_USER_NAME, payload });
