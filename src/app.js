import React from 'react'
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux"; // * as Redux
import { stat } from "fs";
// import { addDeck, showAddDeck, hideAddDeck } from "./actions";
import * as reducers from "./reducers";
import App from "./components/App";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import { createBrowserHistory } from "history";

import VisibleCards from "./components/VisibleCards";

reducers.routing = routerReducer;

console.log('Hello React and Redux');

//ADD_DECK
//SHOW_ADD_DECK
//HIDE_ADD_DECK

const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store);
// const history = syncHistoryWithStore(createBrowserHistory(), store);

function run() {
    let state = store.getState();
    console.log('State : ', state);
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={App}>
                    <Route path='/deck/:deckId' component={VisibleCards}/>
                </Route>
            </Router>
        </Provider>
        , document.getElementById('root')
    );
}

run();

store.subscribe(run);

/*
{
        cards,
        decks,
        addingDeck
    }
*/

// window.show = () => store.dispatch(showAddDeck());
// window.hide = () => store.dispatch(hideAddDeck());
// window.add = () => store.dispatch(addDeck(new Date().toString()));

// ReactDOM.render(<App> 
//         <Sidebar decks={[ {name: 'Deck 1'} ]} addingDeck={true}></Sidebar>
//      </App>, document.getElementById('root'));

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