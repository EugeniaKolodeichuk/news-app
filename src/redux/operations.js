import { addAllPostsAction } from './reducers/postsReducer';

export const fetchPosts = () => {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        //console.log('json', json);
        dispatch(addAllPostsAction(json));
        return;
      });
  };
};
