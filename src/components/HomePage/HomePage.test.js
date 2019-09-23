import React from 'react'
import renderer from 'react-test-renderer'
import HomePage from './HomePage'

describe('Test on <HomePage /> component', () => {
   test('should render with no props', () => {
      const componentNoprops = renderer.create(<HomePage />)
      const treeNoprops = componentNoprops.toJSON()
      expect(treeNoprops).toMatchSnapshot()
   })
})