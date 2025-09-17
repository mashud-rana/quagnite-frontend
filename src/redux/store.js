import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSliceReducer from "./features/auth/authSlice";
import courseSliceReducer from "./features/student/course/courseSlice";


const persistConfig = {
  key: "root",
  storage,
};

//auth Persisted reducer
const authPersistedReducer = persistReducer(persistConfig, authSliceReducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authPersistedReducer,
    course: courseSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
