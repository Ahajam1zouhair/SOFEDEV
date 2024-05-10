import { configureStore } from "@reduxjs/toolkit";
import { apiMatch } from "./Api/ApiMatch";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiAuth } from "./Api/apiAuth";

export const store = configureStore({
  reducer: {
    [apiMatch.reducerPath]: apiMatch.reducer,
    [apiAuth.reducerPath]: apiAuth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMatch.middleware, apiAuth.middleware),
});

setupListeners(store.dispatch);
