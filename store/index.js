import { configureStore, createSerializableStateInvariantMiddleware, isPlain, getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
  reducer: {

  },
  middleware: customizedMiddleware
})

export default store;