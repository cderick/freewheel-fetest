import React from 'react'
import renderer from 'react-test-renderer'
import TflInfo from './TflInfo'
import mockData from './__mock__/mock'

const componentNoprops = renderer.create(<TflInfo />)
const componentWithProps = renderer.create(<TflInfo {...mockData}  />)

describe('Test on <TflInfo /> component', () => {
   test('should not render with no props', () => {
      const treeNoprops = componentNoprops.toJSON()
      expect(treeNoprops).toMatchSnapshot()
   })
   test('should render with all props', () => {
      const treeWithprops = componentWithProps.toJSON()
      expect(treeWithprops).toMatchSnapshot()
   })
})