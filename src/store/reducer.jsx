import { combineReducers } from 'redux';
import dataReducer from './dataSlice';
import cartReducer from './cartSlice';
import searchReducer from './searchSlice'
const rootReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
    search: searchReducer
});

export default rootReducer;