import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//this is to prepare for more middleware in the future
const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
