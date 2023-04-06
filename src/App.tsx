import { useState, useEffect, ChangeEvent } from 'react';
import CardList  from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component' 
import { getData } from './utils/data.utils'
import './App.css';


export type Face = {
  id: string;
  name: string;
  email: string
}

const App = () =>{

  const [faces, setFaces] = useState<Face[]>([])
  const [searchField, setSearchField] = useState('')
  const [newFaces, setNewFaces] = useState(faces)
  // console.log(searchField);
  
  useEffect(() =>{
  const fetchUser = async () => {
    const users = await getData<Face[]>('https://jsonplaceholder.typicode.com/users') 
    setFaces(users)
  }
  fetchUser()
  }, [])

  useEffect(() =>{
    setNewFaces(faces.filter(face => face.name.toLowerCase().includes(searchField)))
  }, [faces, searchField])

  const changeSearchHandler = (event: ChangeEvent<HTMLInputElement>): void =>{
    const searchFieldString = event.target.value?.toLowerCase()
    setSearchField(searchFieldString)
  }
  

  
  return (<div className="App">
            <h1 className='app-title'>FaceNote</h1>
            <SearchBox changeSearchHandler={changeSearchHandler} placeHolder='search faces' className='search-box'/>
            <CardList faces={newFaces}/> 
          </div>
      );
}
export default App;
