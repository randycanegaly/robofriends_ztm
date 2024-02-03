import { CHANGE_SEARCH_FIELD } from "./constants";
 
 const initialState = {
    searchField: ''
 }

 export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
            //{} is the target, an empty object
            //the source objects are state and {searchField: action.payload}
            //both state and {searchField: action.payload} have to be enumerable ???
            //so this will put state and {searchField: action.payload} into a new object and return it
        default:
            return state;//no modifications, return what was passed in
    }
 } 