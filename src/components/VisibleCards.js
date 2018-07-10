import React from 'react';
import Card from "./Card";
import { connect } from "react-redux";

const mapStateToProps = ({cards}, { params: { deckId }}) => ({
    cards: cards.filter( card => card.deckId === deckId ) 
});

const Cards = (props) => {
    return (
        <div className='main'>
            {props.cards.map( (card) => {
                return <Card card={card} key={card.id} />
            })}
            <br/>
            {/* Deck will display here  */}
            <br/>
            {props.children}
        </div>
    );
};

export default connect(mapStateToProps)(Cards);