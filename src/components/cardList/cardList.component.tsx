import { Face } from '../../App'
import Card from '../card/Card.component'
import './cardList.styles.css'

type CardListProps = {
    faces: Face[]
}

const CardList = ({ faces }: CardListProps) => (
        <div className='card-list'>
        {faces.map((face, index) => <Card face={face} key={index}/>)} 
        </div>
        );
    
    
    export default CardList;
