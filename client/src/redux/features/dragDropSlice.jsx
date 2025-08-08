import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card_A: ["Read the code", "push to github"],
  card_B: ["change the style of dashboard"],
  card_C: [" Drag and Drop"]
};

const DragDropSlice = createSlice({
  name: "dragDrop",
  initialState,
  reducers: {
    moveItem: (state, action) => {
      const { source, destination } = action.payload;
      if (!state[source.droppableId] || !state[destination.droppableId]) return;

      // if moving within same list
      if (source.droppableId === destination.droppableId) {
        const items = Array.from(state[source.droppableId]);
        const [movedItem] = items.splice(source.index, 1);
        items.splice(destination.index, 0, movedItem);
        state[source.droppableId] = items;
      } else {
        //moving between 2 diffrent lists

        const sourceItems = Array.from(state[source.droppableId]);
        const destItems = Array.from(state[destination.droppableId]);

        const [movedItem] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, movedItem);

        state[source.droppableId] = sourceItems;
        state[destination.droppableId] = destItems;
      }
    },
  },
});

export const { moveItem } = DragDropSlice.actions;
export default DragDropSlice.reducer;
