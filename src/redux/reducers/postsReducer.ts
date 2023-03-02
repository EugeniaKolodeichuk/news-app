interface Post {
  id: string;
  title: string;
  content: string;
}

interface PostsState {
  posts: Post[];
}

interface AddAllPostsAction {
  type: typeof ADD_ALL_POSTS;
  payload: Post[];
}

interface RemovePostAction {
  type: typeof REMOVE_POST;
  payload: string;
}

type PostsAction = AddAllPostsAction | RemovePostAction;

export const defaultState: PostsState = {
  posts: [],
};

const ADD_ALL_POSTS = 'ADD_ALL_POSTS';
const REMOVE_POST = 'REMOVE_POST';

export const postsReducer = (state = defaultState, action: PostsAction): PostsState => {
  const { payload, type } = action;

  switch (type) {
    case ADD_ALL_POSTS:
      return { ...state, posts: [...state.posts, ...payload] };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};

export const addAllPostsAction = (payload: Post[]): AddAllPostsAction => ({
  type: ADD_ALL_POSTS,
  payload,
});

export const removePostAction = (payload: string): RemovePostAction => ({
  type: REMOVE_POST,
  payload,
});
