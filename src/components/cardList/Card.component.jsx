import React, { Component } from 'react';
import './card.styles.css'

class Card extends Component {
    render() {
        const { face:{name, id, email} } = this.props

        return <div className='card-container'>
            <img alt={`face of ${name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>;
    }
}

export default Card;