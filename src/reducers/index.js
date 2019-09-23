import { combineReducers } from 'redux-immutable'
import queryContentReducer from './queryContent'
import tflContentReducer from './tflContent'

const rootReducer = combineReducers({
	queryContent: queryContentReducer,
	tflContent: tflContentReducer,
})

export default rootReducer
