const defaultState = {
  posts: [],
};

const ADD_ALL_POSTS = 'ADD_ALL_POSTS';

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_POSTS:
      //console.log('posts reducer', ...state.posts);
      return { ...state, posts: [...state.posts, ...action.payload] };
    //break;
    default:
      return state;
  }
};

export const addAllPostsAction = payload => ({ type: ADD_ALL_POSTS, payload });
