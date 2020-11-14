import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
// import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import { fetchCollcetionStart } from "./shop/shop.saga";

const sageMiddleware = createSagaMiddleware();

//this is to prepare for more middleware in the future
const middleware = [sageMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

//use saga
sageMiddleware.run(fetchCollcetionStart);

export const persistor = persistStore(store);

export default { store, persistor };
