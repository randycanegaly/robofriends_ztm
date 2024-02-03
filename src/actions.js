import { CHANGE_SEARCH_FIELD, 
            REQUEST_ROBOTS_PENDING,
            REQUEST_ROBOTS_SUCCESS, 
            REQUEST_ROBOTS_FAIL } from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


//requestRobots is assigned a function that takes no arguments
//that function returns a function that takes a dispatch function
//that function uses the dispatch function it was passed to dispatch each of the three flavors of REQUEST_ROBOTS actions
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });//???
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then( data => dispatch( { type: REQUEST_ROBOTS_SUCCESS, payload: data }))//data is the json users listing from jsonplaceholder API
        .catch( (error) => dispatch( { type: REQUEST_ROBOTS_FAIL, payload: error }));
}