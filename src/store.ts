import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cocktailsApiSlice } from './queries';

const rootReducer = combineSlices(cocktailsApiSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cocktailsApiSlice.middleware),
    preloadedState
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = makeStore();
