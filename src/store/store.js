import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const listSlise = createSlice({
  name: "list",
  initialState: {
    tasks: [],
  },
  reducers: {
    pushTask: (state, action) => ({ ...state, tasks: action.payload }),
  },
});

export const { pushTask } = listSlise.actions;

const reducer = combineReducers({
  list: listSlise.reducer,
});
export default configureStore({
  reducer,
});
