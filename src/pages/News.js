import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react';
import { useEffect, useState } from 'react';
import { Image } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const randomImage = 'https://source.unsplash.com/1600x900/?business';

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setPosts(json);
        //console.log(posts);
      });
  }, []);

  return (
    <Box sx={{ width: '80%', m: 'auto' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts &&
          posts.map(post => (
            //console.log('post', post);
            <Grid
              item
              xs={6}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
              }}
            >
              <img width="500px" src={randomImage} />
              <Item key={post.id} sx={{ fontWeight: 'bold' }}>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </Item>
              <Item>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default News;