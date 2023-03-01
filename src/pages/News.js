import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts } from '../redux/operations';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box, Button } from '@mui/material';

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
  const { t } = useTranslation();

  const posts = useSelector(({ posts }) => posts.posts);

  useEffect(() => loadMore, []);

  const loadMore = () => {
    setPage(page + 1);
    dispatch(fetchPosts(page));
  };

  const onDelete = id => dispatch(deletePost(id));
  const getTitle = text => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <Box sx={{ width: '80%', mr: 'auto', ml: 'auto', mt: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts &&
          posts.map(post => (
            <Grid
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
              <Item sx={{ background: 'rgba(255, 255, 255, 0.8)' }}>
                <img width="100%" src={randomImage} alt="newsImg" />
                <Item
                  key={uuidv4()}
                  sx={{
                    fontWeight: 'bold',
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '0',
                    boxShadow: 'none',
                  }}
                >
                  {getTitle(post.title)}
                </Item>
                <Item
                  sx={{
                    width: '100%',
                    background: 'transparent',
                    padding: '0',
                    boxShadow: 'none',
                  }}
                >
                  {getTitle(post.body)}
                </Item>
              </Item>
              <Button
                sx={{
                  m: '10px auto',
                  width: '100%',
                  color: '#336600',
                  background: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
                onClick={() => onDelete(post.id)}
              >
                {t('delete')}
              </Button>
            </Grid>
          ))}
        <Button
          sx={{
            m: '10px auto',
            width: '100%',
            color: '#336600',
            background: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)',
            },
          }}
          onClick={loadMore}
        >
          {t('loadMore')}
        </Button>
      </Grid>
    </Box>
  );
};

export default News;
