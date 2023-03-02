interface UserState {
  userName: string;
}

interface AddUserNameAction {
  type: typeof ADD_USER_NAME;
  payload: string;
}

type UserAction = AddUserNameAction;

const defaultState: UserState = {
  userName: '',
};

const ADD_USER_NAME = 'ADD_USER_NAME';

export const userReducer = (state = defaultState, action: UserAction): UserState => {
  const { payload, type } = action;
  switch (type) {
    case ADD_USER_NAME:
      return { ...state, userName: payload };

    default:
      return state;
  }
};

export const addUserNameAction = (payload: string): AddUserNameAction => ({
  type: ADD_USER_NAME,
  payload,
});
