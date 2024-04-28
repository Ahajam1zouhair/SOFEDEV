import { configureStore } from "@reduxjs/toolkit";
import { apiMatch } from "./Api/ApiMatch";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [apiMatch.reducerPath]: apiMatch.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMatch.middleware),
});

setupListeners(store.dispatch);
