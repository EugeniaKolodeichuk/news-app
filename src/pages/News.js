import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '../redux/operations';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
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
  };

  const getTitle = post => post.body.charAt(0).toUpperCase() + post.body.slice(1);

  return (
    <Box sx={{ width: '80%', mr: 'auto', ml: 'auto', mt: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts &&
          posts.map(post => (
            <Grid
              onClick={() => onDelete(post.id)}
              key={uuidv4()}
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
              <img width="90%" src={randomImage} alt="newsImg" />
              <Item key={uuidv4()} sx={{ fontWeight: 'bold', width: { sx: '200px' } }}>
                {getTitle(post)}
              </Item>
              <Item>{getTitle(post)}</Item>
            </Grid>
          ))}
        <Button sx={{ m: '10px auto' }} onClick={loadMore}>
          Load more
        </Button>
      </Grid>
    </Box>
  );
};

export default News;
