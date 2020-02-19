import React from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, createStore, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { BrowserRouter as Router } from "react-router-dom"
import rootReducer from "./redux/reducers"

import App from "./App"
import "./index.css"
import "animate.css/animate.css"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunk, logger]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
