import React from 'react'
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import { connect } from "react-redux";

const mapStateToProps = (state, { params: { deckId}} ) => ({
    deckId
});

const App = (props) => {
    return (<div className='app'>
        <h1>Hello React - created using a Functional Component - changed something</h1>
        <Toolbar deckId={props.deckId} />
        <Sidebar />
        <h1>Deck: {props.deckId}</h1>
        {props.children}
    </div>);
};

export default connect(mapStateToProps)(App);