import { configureStore, createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit'
import kanjiReducer  from './reducers/kanjiReducer';

// Reference here all your application reducers
const reducer = {
	kanjiReducer: kanjiReducer,
}

// @ts-ignore
const store = configureStore(
	{
		reducer,
		middleware: [createSerializableStateInvariantMiddleware({
			ignoredActions: ["SET_KANJIS", "SET_SELECTED_KANJI"],
			ignoreActions: true
		})]
	},);

export default store;