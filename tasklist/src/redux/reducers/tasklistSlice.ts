import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITaskItem } from "../../types/ITaskItem";

interface TasklistState {
  tasklist: ITaskItem[];
  tasklistDetails?: ITaskItem | null;
}

const initialState: TasklistState = {
  tasklist: [],
  tasklistDetails: null,
};

export const tasklistSlice = createSlice({
  name: "tasklist",
  initialState,
  reducers: {
    setTasklist: (state, action: PayloadAction<ITaskItem[]>) => {
      state.tasklist = action.payload;
    },
    setTasklistDetails: (state, action: PayloadAction<ITaskItem | null>) => {
      state.tasklistDetails = action.payload;
    },
  },
});

export const { setTasklist, setTasklistDetails } = tasklistSlice.actions;

export default tasklistSlice.reducer;
