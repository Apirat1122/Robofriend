import React,{ Component }  from "react";
import SearchBox from './Searchbox';
import {robots} from './robots';
import { render } from "react-dom";
import CardList from "./Cardlist";
import './App.css';
import Scroll from "./Scroll";

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({robots: users}));


  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
}

render() {
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
  if (this.state.robots.length === 0 ) {
    return <h1>Loading</h1>    
  } else {
    return (
      <div className='tc'>
      <h1>Robo Friends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
      <CardList robots={filteredRobots} />
      </Scroll>
      </div>
    );
  }
  
}
  

}












export default App;