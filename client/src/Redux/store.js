import { configureStore } from "@reduxjs/toolkit";
import { apiMatch } from "./Api/ApiMatch";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiAuth } from "./Api/apiAuth";
import { apiNews } from "./Api/apiNew";

export const store = configureStore({
  reducer: {
    [apiNews.reducerPath]: apiNews.reducer,
    [apiMatch.reducerPath]: apiMatch.reducer,
    [apiAuth.reducerPath]: apiAuth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMatch.middleware, apiAuth.middleware , apiNews.middleware),
});

setupListeners(store.dispatch);
