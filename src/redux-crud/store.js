import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice"

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});

//https://dev.to/sanderdebr/react-redux-crud-app-for-beginners-with-hooks-2hja