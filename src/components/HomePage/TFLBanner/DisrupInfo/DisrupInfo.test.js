import React from 'react'
import renderer from 'react-test-renderer'
import DisrupInfo from './DisrupInfo'
import mockData from './__mock__/mock'

const componentNoprops = renderer.create(<DisrupInfo />)
const componentWithProps = renderer.create(<DisrupInfo {...mockData}  />)

describe('Test on <DisrupInfo /> component', () => {
   test('should not render with no props', () => {
      const treeNoprops = componentNoprops.toJSON()
      expect(treeNoprops).toMatchSnapshot()
   })
   test('should render with all props', () => {
      const treeWithprops = componentWithProps.toJSON()
      expect(treeWithprops).toMatchSnapshot()
   })
})