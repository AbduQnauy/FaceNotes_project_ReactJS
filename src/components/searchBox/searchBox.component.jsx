import './searchBox.styles.css'

const SearchBox = ({className, changeSearchHandler, placeHolder}) =>(<input className={className} type='search' placeholder={placeHolder} onChange={changeSearchHandler} />
        );


export default SearchBox;