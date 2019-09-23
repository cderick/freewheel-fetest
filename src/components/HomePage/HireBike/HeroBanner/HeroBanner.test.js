import React from 'react'
import renderer from 'react-test-renderer'
import HeroBanner from './HeroBanner'

const minProps = {
   heroBanner: {
      heroMessage: {
          title: 'Cycle hire scheme.'
      },
      heroForms: [{
          label: 'Find a cycle to hire:',
          id: 'location',
          placeholder: 'London, SW20, Waterloo...',
      }]
   }
}

const componentNoprops = renderer.create(<HeroBanner />)
const componentWithProps = renderer.create(<HeroBanner {...minProps}  />)

describe('Test on <HeroBanner /> component', () => {
   test('should not render with no props', () => {
      const treeNoprops = componentNoprops.toJSON()
      expect(treeNoprops).toMatchSnapshot()
   })
   test('should render with min props', () => {
      const treeProps = componentWithProps.toJSON()
      expect(treeProps).toMatchSnapshot()
   })
})