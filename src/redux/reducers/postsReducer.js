const defaultState = {
  posts: [],
};

const ADD_ALL_POSTS = 'ADD_ALL_POSTS';
const REMOVE_POST = 'REMOVE_POST';

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_POSTS:
      return { ...state, posts: [...state.posts, ...action.payload] };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addAllPostsAction = payload => ({ type: ADD_ALL_POSTS, payload });
export const removePost = payload => ({ type: REMOVE_POST, payload });
