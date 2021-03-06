import visibilityFilterTests from './visibilityFilterTests';
import addTodoTests from './addTodoTests';
import toggleTodoStatusTests from './toggleTodoStatusTests';
import * as redux from 'redux';
import * as reducks from '../src';

describe('set visibility filter', () => {
    describe('redux', () =>
        Object.keys(visibilityFilterTests).map(key => it(key, visibilityFilterTests[key](redux.createStore)))
    );

    describe('reducks', () =>
        Object.keys(visibilityFilterTests).map(key => it(key, visibilityFilterTests[key](reducks.createStore)))
    );
});

describe('adding todos', () => {
    describe('redux', () =>
        Object.keys(addTodoTests).map(key => it(key, addTodoTests[key](redux.createStore)))
    );

    describe('reducks', () =>
        Object.keys(addTodoTests).map(key => it(key, addTodoTests[key](reducks.createStore)))
    );
});

describe('toggle todos', () => {
    describe('redux', () =>
        Object.keys(toggleTodoStatusTests).map(key => it(key, toggleTodoStatusTests[key](redux.createStore)))
    );

    describe('reducks', () =>
        Object.keys(toggleTodoStatusTests).map(key => it(key, toggleTodoStatusTests[key](reducks.createStore)))
    );
});
