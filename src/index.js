import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './stylesheets/globalStyles.scss'
import * as serviceWorker from './serviceWorker'
import reducer from './reducers'
import HomePageContainer from './containers/HomePageContainer/HomePageContainer'

let store = null

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
	store = createStore(reducer, applyMiddleware(ReduxPromise))
} else {
	const MIDDLEWARE = applyMiddleware(ReduxPromise)
	const DEV_TOOLS = window.devToolsExtension ? window.devToolsExtension() : f => f
	store = createStore(reducer, compose(MIDDLEWARE, DEV_TOOLS))
}

ReactDOM.render(
	<Provider store={store}>
		<HomePageContainer />
	</Provider>, document.getElementById('root'),
)

serviceWorker.unregister()