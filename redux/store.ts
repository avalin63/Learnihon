import { configureStore, createSerializableStateInvariantMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit'
import kanjiReducer  from './reducers/kanjiReducer';

// Reference here all your application reducers
const reducer = {
	kanjiReducer: kanjiReducer,
}

// @ts-ignore
const store = configureStore(
	{
		reducer,
		middleware: getDefaultMiddleware({
			serializableCheck: false
			})
		
	},);

export default store;