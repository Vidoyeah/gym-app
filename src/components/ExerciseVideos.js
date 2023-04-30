import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import classes from './ExerciseVideos.module.css';

function ExerciseVideos({ exerciseVideos, name }) {
  if (!exerciseVideos.length) {
    return 'Loading...';
  }
  return (
    <Box sx={{ lg: '200px', xs: '20px' }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
      >
        {exerciseVideos?.slice(0, 4).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className={classes['exercise-video']}
            />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h5" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
