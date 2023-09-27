import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/user/userSlice";
import baseAPI from "./features/api/baseAPI";

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
