import './card.styles.css'

const Card = ({ face:{name, id, email} }) =>(<div className='card-container'>
            <img alt={`face of ${name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>);
  


export default Card;