import { combineReducers } from "redux";
import menu from 'redux/reducers/menu_reducer';


const appReducer = combineReducers({
    menu
})

export default appReducer;