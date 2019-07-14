
import { combineReducers } from 'redux';
import contacts from './contactReducers';
import user from './userReducers';
import theatre from './theatreReducers';


export default combineReducers({
    contacts: contacts,
    user:user,
    theatre:theatre
});