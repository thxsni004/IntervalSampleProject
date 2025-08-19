import { Box } from '@mui/material';
import React from 'react';
import { FixedSizeList } from 'react-window';

const ReactWindow = () => {

  const Row = ({ index, style }) => {
    return (
      <Box
  className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
        style={style}
      >
        Row {index}
      </Box>
    );
  };

  return (
    <Box  sx={{display:"flex" ,}}>
      <FixedSizeList
        height={680}
        itemCount={100}
        itemSize={30}
        width={800}
      >
        {Row}
      </FixedSizeList>
    </Box>
  );
};

export default ReactWindow;

// import { FixedSizeList as List } from 'react-window';
 
// const Column = ({ index, style }) => (
//   <div style={style}>Column {index}</div>
// );
 
// const Example = () => (
//   <List
//     height={75}
//     itemCount={10}
//     itemSize={100}
//     layout="horizontal"
//     width={900}
//   >
//     {Column}
//   </List>
// );

// export default Example;