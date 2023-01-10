import { Component  } from 'react';
import CardList  from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component' 
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      faces: [],
      searchField: ''
    }
    // console.log('constructor');
  }

  changeSearchHandler = (event) =>{
    const searchField = event.target.value?.toLowerCase()
    this.setState(() =>{
      return {searchField}
    })
  }

  render(){
    // console.log('render');
    const { changeSearchHandler } = this
    const { faces, searchField } = this.state


    const newFaces = faces.filter((face) => {return face.name.toLowerCase().includes(searchField)})

    // {newFaces.map((face, index) => <h3 key={index}>{face.name}</h3>)}

    return (
      <div className="App">
        <h1 className='app-title'>FaceNote</h1>
        <SearchBox changeSearchHandler={changeSearchHandler} placeHolder='search faces' className='search-box'/>
        
        <CardList faces={newFaces}/>
      </div>
    );
  }

  componentDidMount(){
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState(() => {return {faces: data}}))
  }
}

export default App;
