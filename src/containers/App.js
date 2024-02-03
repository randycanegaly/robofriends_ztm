import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../actions';


//connect(), connects components to Redux and provides the value of state, from the Redux store, to the connected components
const mapStateToProps = state => {//so, state is available because of ^^^^^
  return {
    searchField: state.searchRobots.searchField, //state.searchRobots.searchField extracts that a value from the state
    //that value is then assigned to the searchField property returned here
    //this object is passed below to the App component, being connected, as props
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}


const mapDispatchToProps = dispatch => {//dispatch is a function provided by Redux
  return {//returns an object
    //onSearchChange is assigned a function
    //that function takes an event, something entered in the search field
    //dispatch sends the setSearchField function as props to App
    //setSearchField, in actions.js, takes the text from the search field entry event
    //setSearchField returns an object with an action type and the text above as payload
    //searchRobots in reducers.js will see that and update state in Redux
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())//redux-thunk will see that we are dispatching a function, above it dispatched an object
    //and do the asynchy thing
  }
}

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: []
  //   }
  // }

  componentDidMount() {
    // // console.log('store in App:', this.props.store.getState());
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ robots: users})});
    this.props.onRequestRobots(); //???
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    //const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;//since mapStateToProps and mapDispatchToProps sent these as props
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ? //if we're pending, then return "Loading", otherwise return the JSX of search box and grid of robots
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect() function returns a function. The argument to that function is App.
//need to define the callback functions passed to connect(). See above