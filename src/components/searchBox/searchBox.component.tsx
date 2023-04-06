import './searchBox.styles.css'
import { ChangeEvent } from 'react';

type SearchBoxProps = {
  className: string;
  changeSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string
}

const SearchBox = ({className, changeSearchHandler, placeHolder}: SearchBoxProps) =>(<input className={className} type='search' placeholder={placeHolder} onChange={changeSearchHandler} />
        );


export default SearchBox;