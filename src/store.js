import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './CartSlice'; // Import your cart reducer

const rootReducer = combineReducers({
    cart: cartReducer, // Add your cart reducer
});

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        {/* Your App components */}
    </Provider>
);

export default App;
