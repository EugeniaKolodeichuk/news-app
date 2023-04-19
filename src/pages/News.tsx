import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box, Button, Toolbar, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { fetchAllPosts, deletePost, fetchAllNews } from '../redux/features/postsSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import ScrollTopButton from '../components/ScrollTopButton';

const randomImage = 'https://source.unsplash.com/1600x900/?business';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
}));

const News: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const posts = useAppSelector(({ posts }) => posts.posts);

  useEffect(() => {
    loadPosts();
    loadNews();
    console.log('load news', loadNews());
  }, []);

  const loadPosts = () => {
    setPage(page + 1);
    dispatch(fetchAllPosts(page));
  };

  const loadNews = () => {
    dispatch(fetchAllNews());
    console.log('fetch', fetchAllNews());
  };

  const onDelete = (id: string) => dispatch(deletePost(id));

  const getTitle = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <>
      <Box sx={{ width: '80%', mr: 'auto', ml: 'auto', maxWidth: '1600px' }}>
        <Toolbar sx={{ maxHeight: '1px' }} id="back-to-top-anchor" />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          id="back-to-top-anchor"
        >
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
                <Item
                  sx={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    minHeight: { lg: '400px' },
                    height: '100%',
                  }}
                >
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
                    maxWidth: '200px',
                    color: '#336600',
                    boxShadow:
                      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
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
          {posts.length && (
            <Box sx={{ width: '100%' }}>
              <Button
                sx={{
                  m: '10px auto',
                  display: 'block',
                  maxWidth: '200px',
                  color: '#336600',
                  background: 'rgba(255, 255, 255, 0.8)',
                  boxShadow:
                    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
                onClick={loadPosts}
              >
                {t('loadMore')}
              </Button>
            </Box>
          )}
        </Grid>
      </Box>
      <ScrollTopButton>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            color: '#336600',
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTopButton>
    </>
  );
};

export default News;
