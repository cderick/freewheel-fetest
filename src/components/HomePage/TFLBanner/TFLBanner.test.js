import React from 'react'
import renderer from 'react-test-renderer'
import TFLBanner from './TFLBanner'

const minProps = {
   tubeBanner: {
      tubeMessage: {
         title: 'This is my title'
      }
   }
}

const componentNoprops = renderer.create(<TFLBanner />)
const componentWithProps = renderer.create(<TFLBanner {...minProps}  />)

describe('Test on <TFLBanner /> component', () => {
   test('should not render with no props', () => {
      const treeNoprops = componentNoprops.toJSON()
      expect(treeNoprops).toMatchSnapshot()
   })
   test('should render with min props', () => {
      const treeProps = componentWithProps.toJSON()
      expect(treeProps).toMatchSnapshot()
   })
})