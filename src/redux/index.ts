import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./reducer"

const sagaMiddleware = createSagaMiddleware()

const composerEnhancer =
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, composerEnhancer)

export default store
