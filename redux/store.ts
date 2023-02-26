import { configureStore, createSerializableStateInvariantMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit'
import { SET_KANJIS, SET_PLAYGROUND_LIST, SET_SELECTED_KANJI } from './constants';
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
			serializableCheck: {
				ignoredActions: [SET_KANJIS, SET_PLAYGROUND_LIST, SET_SELECTED_KANJI]
				}
		})
		
	},);

export default store;