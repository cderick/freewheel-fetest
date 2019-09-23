import React from 'react'
import renderer from 'react-test-renderer'
import Navigation from './Navigation'

const componentNoprops = renderer.create(<Navigation />)

describe('Test on <Navigation /> component', () => {
   test('should not render with no props', () => {
      const treeNoprops = componentNoprops.toJSON()
      expect(treeNoprops).toMatchSnapshot()
   })
})