const { configureStore } = require("@reduxjs/toolkit");
import greetingReducer from './store/reducers/greetingReducer';

const store = configureStore({
    reducer: {
        greeting: greetingReducer,
      },
})

export default store;