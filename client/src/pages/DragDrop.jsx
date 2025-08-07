import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleSidebar } from '../redux/features/sidebarSlice';

const initialData = {
  card_A: ['Item 1', 'Item 2'],
  card_B: ['Item 3'],
};

const DragDrop = () => {
  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceItems = Array.from(data[source.droppableId]);
    const destItems = Array.from(data[destination.droppableId]);
    const [movedItem] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, movedItem);

    setData((prev) => ({
      ...prev,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    }));
  };

  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar
        mobileOpen={sidebarOpen}
        handleDrawerToggle={() => dispatch(toggleSidebar())}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          position: 'relative',
        }}
      >
        {isMobile && (
          <IconButton
            onClick={() => dispatch(toggleSidebar())}
            sx={{
              position: 'fixed',
              top: 10,
              left: 10,
              zIndex: theme.zIndex.drawer + 1,
              color: 'black',
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Drag & Drop Task Manager
        </Typography>

        <DragDropContext onDragEnd={onDragEnd}>
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {['card_A', 'card_B'].map((cardid) => (
              <Droppable droppableId={cardid} key={cardid}>
                {(provided, snapshot) => (
                  <Paper
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    elevation={4}
                    sx={{
                      width: 280,
                      minHeight: 300,
                      p: 2,
                      borderRadius: 3,
                      backgroundColor: snapshot.isDraggingOver
                        ? '#fbe3fdff'
                        : '#ffffff',
                      boxShadow: snapshot.isDraggingOver
                        ? '0 4px 10px rgba(243, 33, 121, 0.3)'
                        : '0 2px 6px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        mb: 2,
                        color: '#58066dff',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                      }}
                    >
                      {cardid.replace('card_', 'Card ')}
                    </Typography>

                    {data[cardid].map((item, index) => (
                      <Draggable draggableId={item} index={index} key={item}>
                        {(provided, snapshot) => (
                          <Paper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{
                              p: 2,
                              mb: 2,
                              borderRadius: 2,
                              backgroundColor: snapshot.isDragging
                                ? '#fbbbf6ff'
                                : '#fde3fbff',
                              boxShadow: snapshot.isDragging
                                ? '0 4px 8px rgba(0,0,0,0.2)'
                                : '0 1px 3px rgba(0,0,0,0.1)',
                              transition: 'background-color 0.2s ease',
                              cursor: 'grab',
                              '&:hover': {
                                backgroundColor: '#ebc6ebff',
                              },
                            }}
                          >
                            <Typography variant="body1" fontWeight={500}>
                              {item}
                            </Typography>
                          </Paper>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Paper>
                )}
              </Droppable>
            ))}
          </Box>
        </DragDropContext>
      </Box>
    </Box>
  );
};

export default DragDrop;
