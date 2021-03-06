import React from 'react';
import { Link, browserHistory } from "react-router";
import ReactDOM from "react-dom";

const CardModal = React.createClass({

    componentDidUpdate() {
        ReactDOM.findDOMNode(this.refs.front).focus();
    },

    onSave(e) {
        let front = ReactDOM.findDOMNode(this.refs.front);
        let back = ReactDOM.findDOMNode(this.refs.back);

        this.props.onSave(
            Object.assign({}, this.props.card, {
                front: front.value,
                back: back.value
            })
        );

        browserHistory.push(`/deck/${this.props.card.deckId}`);
    },

    onDelete() {
        this.props.onDelete(this.props.card.id);
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    },

    render() {
        let { card, onDelete } = this.props;

        return (
            <div className='modal'>
                <h1> {onDelete ? 'Edit' : 'New' } </h1>
                <label>Card Front: </label>
                <textarea ref='front' defaultValue={card.front}></textarea>
                <label>Card Back: </label>
                <textarea ref='back' defaultValue={card.back}></textarea>

                <p>
                    <button onClick={this.onSave}>Save Card</button>

                    <Link className='btn' to={`/deck/${card.deckId}`}>Cancel</Link>

                    {
                        onDelete ? 
                        <button className='delete' onClick={this.onDelete}>Delete Card</button> : 
                        null
                    }
                </p>
            </div>
        );
    }
});

export default CardModal;