import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { SET_KANJIS, SET_PLAYGROUND_LIST, SET_SELECTED_KANJI } from './constants';
import kanjiReducer from './reducers/kanjiReducer';

// Reference here all your application reducers
const reducer = {
	kanjiReducer: kanjiReducer,
}

// @ts-ignore
const store = configureStore(
	{
		reducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [SET_KANJIS, SET_PLAYGROUND_LIST, SET_SELECTED_KANJI],
				ignoredActionPaths: ['kanjiReducer'],
				ignoredPaths: ['kanjiReducer']
			}
		})
		
	},);

export default store;