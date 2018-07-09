import React from 'react'
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux"; // * as Redux
import { stat } from "fs";
// import { addDeck, showAddDeck, hideAddDeck } from "./actions";
import * as reducers from "./reducers";
import App from "./components/App";
import Sidebar from './components/Sidebar';
import { Provider } from "react-redux";

console.log('Hello React and Redux');

//ADD_DECK
//SHOW_ADD_DECK
//HIDE_ADD_DECK

const store = createStore(combineReducers(reducers));

function run() {
    let state = store.getState();
    console.log('State : ', state);
    ReactDOM.render(
        <Provider store={store}>
            <App>
                <Sidebar />
                    {/* // decks={state.decks} 
                    // addingDeck={state.addingDeck}
                    // addDeck={ name => store.dispatch(addDeck(name))}
                    // showAddDeck={ () => store.dispatch(showAddDeck())}
                    // hideAddDeck={ () => store.dispatch(hideAddDeck())} */}
            </App>
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