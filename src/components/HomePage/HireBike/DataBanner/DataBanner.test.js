import React from 'react'
import { shallow } from 'enzyme'
import DataBanner from './DataBanner'

describe('Testing render of DataBanner component', () => {
	it('renders without crashing', () => {
		shallow(<DataBanner />)
	})
})
