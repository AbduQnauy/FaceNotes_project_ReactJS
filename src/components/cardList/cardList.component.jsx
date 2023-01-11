import Card from './Card.component'

import './cardList.styles.css'

const CardList = ({ faces }) => (
        <div className='card-list'>
        {faces.map((face, index) => <Card face={face} key={index}/>)} 
        </div>
        );
    
    
    export default CardList;
