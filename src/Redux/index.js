import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import ReduxStore from './ReduxStore';

const store = configureStore({
    // devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        ReduxStore: ReduxStore
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
