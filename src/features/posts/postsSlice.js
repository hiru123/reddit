import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../api/reddit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit = 'popular') => {
    console.log("thunk is running",subreddit);
    
    const posts = await getPosts(subreddit);
    return posts;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to load posts';
      });
  },
});

export default postsSlice.reducer;

 