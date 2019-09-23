/* eslint import/prefer-default-export: "off" */

import axios from 'axios'
import { TFL_QUERY, API_URL } from '../../constants/config'
import * as types from '../../constants/ActionTypes'

export function getQueryValue(value) {
	const req = axios.get(`${TFL_QUERY}${value}`)

	return {
		type: types.GET_DATACONTENT,
		payload: req,
	}
}

export function getTFLInformation() {
	const req = axios.get(API_URL)

	return {
		type: types.GET_TFL_INFORMATION,
		payload: req,
	}
}