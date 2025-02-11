import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen} from '@testing-library/react-native'
import testReducer from "./testReducer";
import KanjiPlaygroundList from "../components/KanjiPlaygroundList";
import {expect} from '@jest/globals';
import '@testing-library/jest-native/extend-expect';

jest.useFakeTimers();

// @ts-ignore
const store = configureStore({
    reducer: {
        kanjiReducer: testReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

const Wrapper = ({children}) => (<Provider store={store}>{children}</Provider>);

describe('<KanjiPlaygroundList/>', () => {
    test('Assert selected value', () => {

        const expectedList = store.getState().kanjiReducer.playgroundList;
        console.log(store)
        render(
            <Wrapper>
                <KanjiPlaygroundList/>
            </Wrapper>)

        expect(screen.queryAllByTestId("kanji-list-item")).toHaveLength(expectedList.length);
        expectedList.forEach( (value, index) => {
            expect(screen.queryAllByTestId("kanji-list-item")[index]).toHaveTextContent(value.character)
        })
    })
});