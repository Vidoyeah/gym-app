import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';

import classes from './HorizontalScrollBar.module.css';
import ExerciseCard from './ExerciseCard';

function HorizontalScrollBar({ data, bodyPart, setBodyPart, isBodyParts }) {
  return (
    <div className={classes.card}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
          className={classes['scrolling-wrapper']}
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </div>
  );
}

export default HorizontalScrollBar;
