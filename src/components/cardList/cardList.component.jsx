import React, { Component } from 'react';
import Card from './Card.component'

import './cardList.styles.css'

// <h3 key={index}>{face.name}</h3>
class CardList extends Component {
    render() {
        console.log('render');
        const { faces } = this.props
        return (
            // <div>Card list</div>
            // {faces.map((face, index) => <h2>{face.name}</h2>)}
            <div className='card-list'>
            {faces.map((face, index) => <Card face={face} key={index}/>)} 
            </div>
            );
        }
    }
    
    export default CardList;

    // return (<div className='card-container' key={index}>
    //     <img alt={`face of ${name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`}/>
    //     <h2>{name}</h2>
    //     <p>{email}</p>
    // </div>)