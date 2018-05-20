import { stat } from "fs";

console.log('Hello React and Redux');

const cards = (state, action) => {
    switch(action.type) {
        case 'ADD_CARD': 
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });

            return state.concat([newCard]);
        default: 
            return state || [];
    }
};

const store = Redux.createStore(
    Redux.combineReducers({
        cards
    })
);

const App = (props) => {
    return (<div className='app'>
        {/* <h1>Hello React - created using a Functional Component</h1> */}
        {props.children}
    </div>);
};

ReactDOM.render(<App> Hello <strong>React</strong> - using a Functional component and component children </App>, document.getElementById('root'));

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