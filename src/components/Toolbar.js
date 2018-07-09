import React from 'react';
import { showAddDeck } from "../actions";
import { Link } from "react-router";
import { connect } from "react-redux";
import { V4MAPPED } from 'dns';

const mapDispatchToProps = dispatch => ({
    showAddDeck: () => {
        dispatch(showAddDeck())
    }
});

const Toolbar = (props) => {

    let deckTools = props.deckId ? (
        <div>
            <Link to={`/deck/${deckId}/new`}
        </div>
    ) : null;

    return (
        <div className='toolbar'>
            <div>
                <button onClick={props.showAddDeck}> + new Deck </button>
            </div>
            {deckTools}
        </div>
    );
}

export default connect(null, mapDispatchToProps)(Toolbar);