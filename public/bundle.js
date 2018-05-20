(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

var _fs = require('fs');

console.log('Hello React and Redux');

var cards = function cards(state, action) {
    switch (action.type) {
        case 'ADD_CARD':
            var newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date()
            });

            return state.concat([newCard]);
        default:
            return state || [];
    }
};

var store = Redux.createStore(Redux.combineReducers({
    cards: cards
}));

var App = function App(props) {
    return React.createElement(
        'div',
        { className: 'app' },
        props.children
    );
};

ReactDOM.render(React.createElement(
    App,
    null,
    ' Hello ',
    React.createElement(
        'strong',
        null,
        'React'
    ),
    ' - using a Functional component and component children '
), document.getElementById('root'));

// const store = Redux.createStore(function(state, action) {
//     return {
//         cards: cards(state.cards, action)
//     }
// });

/*
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'ADD_CARD',
    data: {
        front: 'front',
        back: 'back'
    }
});

store.dispatch({
    type: 'ADD_CARD',
    data: { }
});
*/

},{"fs":1}]},{},[2]);
