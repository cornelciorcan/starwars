import React, {Component} from 'react';



import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = { 
    films:[],
    urlcharacters:[],
    characters:[]
      }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/films/')
    .then(response=>response.json())
    .then(data=>this.setState({films:data.results}))
  }
 

  render(){
    let films = this.state.films;    
      console.log(films);
      const cont1 = { border: "4px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", marginBottom: "10px", padding: "10px 0px", color: "black" }
      return(
          <div>
   
            {films.map((film) => { return(
   
              <div style={cont1} key={film.title}>
                
                <div><strong>Title: </strong>{film.title}</div>
                <div><strong>From: </strong>{film.release_date}</div>
                <div><strong>Producer: </strong>{film.producer}</div>
                <div><strong>Characters: </strong>
                {film.characters.map((urlchar) =>
                 <li key={urlchar}>{urlchar}</li>)}</div>
              </div>
   
            )} )}
   
          </div>
      )
  }
  

}
export default App;
