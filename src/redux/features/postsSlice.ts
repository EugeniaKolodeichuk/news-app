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

export const fetchAllNews = createAsyncThunk('posts/fetchByPage', async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=apple&from=2023-04-17&to=2023-04-17&sortBy=popularity&apiKey=5b82fed7314944b4ab9f7025add8adf9`
  );
  const news: any = await response.json();
  console.log('news', news);
  return news;
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
