import { CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAIL } from "./constants";
 
 const initialStateSearch = {
    searchField: ''
 }

 export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
            //{} is the target, an empty object
            //the source objects are state and {searchField: action.payload}
            //both state and {searchField: action.payload} have to be enumerable ???
            //so this will put state (the prior state???) and {searchField: action.payload} into a new object and return it
        default:
            return state;//no modifications, return what was passed in
    }
 } 

 const initialStateRobots = {//no robot related activity .... not Pending, no robots, no error
    isPending: false,
    robots: [],
    error: ''
 }

 export const requestRobots = (state=initialStateRobots, action={}) => {//If no state passed in, use initialState as default
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});//add a new state component, isPending to the state passed in
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
            //in the state, the robots property now holds the users gotten from the API and we are no longer Pending
        case  REQUEST_ROBOTS_FAIL:
            return Object.assign({}, state, {error: action.payload, isPending: false});//a new error state element with the error seenß

        default:
            return state;//no modifications, return what was passed in
    }
 }