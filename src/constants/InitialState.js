import { fromJS } from 'immutable'

import * as userState from './ContentState'

const state = {
	queryContent: {
		entries: null,
		errors: null,
		status: userState.QUERY_CONTENT,
	},
	tflContent: {
		entries: null,
		errors: null,
		status: userState.TFL_CONTENT,
	},
}

export default fromJS(state)
