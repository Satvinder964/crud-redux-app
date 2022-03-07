import {combineReducers} from 'redux';
import {usersReducers,blogReducers} from './reducer';

const rootReducer = combineReducers({
     AllData:usersReducers,
     AllDataBlog:blogReducers
})

export default rootReducer