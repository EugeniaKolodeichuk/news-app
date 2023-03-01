import { addAllPostsAction, removePost } from './reducers/postsReducer';

export const fetchPosts =
  (page = 1) =>
  dispatch =>
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(response => response.json())
      .then(json => {
        dispatch(addAllPostsAction(json));
      });

export const deletePost = id => dispatch =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  }).then(dispatch(removePost(id)));
