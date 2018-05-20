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

class Sidebar extends React.Component {
    render() {
        let props = this.props;

        return (<div className='sidebar'>
            <h2>All Decks</h2>
            <ul>
                {props.decks.map((deck, i) => 
                    <li key={i}> {deck.name} </li>
                )}
            </ul>
            {props.addingDeck && <input ref='add' />}
        </div>);
    }
};

ReactDOM.render(<App> 
        <Sidebar decks={[ {name: 'Deck 1'} ]} addingDeck={true}></Sidebar>
     </App>, document.getElementById('root'));

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