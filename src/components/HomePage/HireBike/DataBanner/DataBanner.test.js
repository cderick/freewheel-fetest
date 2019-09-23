import React from 'react'
import renderer from 'react-test-renderer'
import DataBanner from './DataBanner'

const minProps = {
	cardsData: {},
    queryValue: 'Waterloo'
}

const componentNoprops = renderer.create(<DataBanner />)
const componentWithProps = renderer.create(<DataBanner {...minProps}  />)

describe('Test on <DataBanner /> component', () => {
   test('should not render with no props', () => {
      const treeNoprops = componentNoprops.toJSON()
      expect(treeNoprops).toMatchSnapshot()
   })
   test('should render with min props', () => {
      const treeProps = componentWithProps.toJSON()
      expect(treeProps).toMatchSnapshot()
   })
})