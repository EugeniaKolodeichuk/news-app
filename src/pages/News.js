import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react';
import { useEffect, useState } from 'react';
import { Image } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '../redux/operations';
import { removePost } from '../redux/operations';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const randomImage = 'https://source.unsplash.com/1600x900/?business';

const News = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts.posts);

  useEffect(() => loadMore, []);

  const loadMore = () => {
    setPage(page + 1);
    dispatch(fetchPosts(page));
  };

  const onDelete = id => {
    dispatch(deletePost(id));
    console.log('posts', posts);
  };

  const getTitle = post => post.body.charAt(0).toUpperCase() + post.body.slice(1);

  return (
    <Box sx={{ width: '80%', mr: 'auto', ml: 'auto', mt: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts &&
          posts.map(post => (
            <Grid
              onClick={() => onDelete(post.id)}
              key={post.id}
              item
              xs={6}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                mr: 'auto',
                ml: 'auto',
              }}
            >
              <img width="90%" src={randomImage} />
              <Item key={post.id} sx={{ fontWeight: 'bold', width: { sx: '200px' } }}>
                {getTitle(post)}
              </Item>
              <Item>{getTitle(post)}</Item>
            </Grid>
          ))}
      </Grid>
      <button onClick={loadMore}>Load more</button>
    </Box>
  );
};

export default News;
