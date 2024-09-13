import { createSlice } from '@reduxjs/toolkit';
import constants from '../../constants/constants';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    columns: constants.KANBAN_COLUMNS
  },
  reducers: {
    addTask: (state, action) => {
      const { title, task } = action.payload;
      const column = state.columns.find(col => col.title === title);
      if (column) {
        column.tasks.push(task);
      }
    },
    moveTask: (state, action) => {
      const { sourceColumn, destinationColumn, taskId } = action.payload;
      const source = state.columns.find(col => col.title === sourceColumn);
      const destination = state.columns.find(col => col.title === destinationColumn);
      if (source && destination) {
        const task = source.tasks.find(task => task.id === taskId);
        if (task) {
          source.tasks = source.tasks.filter(task => task.id !== taskId);
          destination.tasks.push(task);
        }
      }
    }
  }
});

export const { addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
