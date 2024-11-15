import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./usersagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer, // Pass the root reducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export default store;
