import { addAllPostsAction, removePostAction } from './reducers/postsReducer.ts';

import { Dispatch } from 'redux';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const fetchPosts =
  (page = 1) =>
    async (dispatch: Dispatch) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        const json: Post[] = await response.json();
        dispatch(addAllPostsAction(json));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

export const deletePost = (id: number) => async (dispatch: Dispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    dispatch(removePostAction(id));
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
  }
};
