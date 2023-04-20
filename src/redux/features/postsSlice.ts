import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Post {
  id: string;
  title: string;
  body: string;
}

export const fetchAllPosts = createAsyncThunk('posts/fetchByPage', async (page: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
  const posts: Post[] = await response.json();
  return posts;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id: Post['id']) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
});

const initialState = {
  posts: [] as Post[],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.posts.push(...action.payload);
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      const id = action.meta.arg;
      state.posts = state.posts.filter(post => post.id !== id);
    });
  },
});

export default postsSlice.reducer;
