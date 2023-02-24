import { addAllPostsAction } from './reducers/postsReducer';

export const fetchPosts = (page = 1) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(response => response.json())
      .then(json => {
        console.log('json');
        dispatch(addAllPostsAction(json));
        return;
      });
  };
};
