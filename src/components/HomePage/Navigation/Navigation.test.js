import React from 'react'
import renderer from 'react-test-renderer'
import Navigation from './Navigation'

const minProps = {
   navItems :{
      navigationIcon: {
         image: 'https://www.freewheel.com/wp-content/themes/understrap-child/img/FREEWHEEL-KO.png',
         link: 'https://www.freewheel.com/',
         alt: 'freewheel-logo',
         classes: 'float-left',
         target: 'myTopnav',
         id: 'home'
      },
      navigation: [{
         title: 'Hire a Bike',
         id: 'bikeHire'
      }, {
         title: 'TFL Information',
         id: 'tflInfo'
      }]
   }
}

const componentNoprops = renderer.create(<Navigation />)
const componentWithProps = renderer.create(<Navigation {...minProps}  />)

describe('Test on <Navigation /> component', () => {
   test('should not render with no props', () => {
      const treeNoprops = componentNoprops.toJSON()
      expect(treeNoprops).toMatchSnapshot()
   })
   test('should render with min props', () => {
      const treeProps = componentWithProps.toJSON()
      expect(treeProps).toMatchSnapshot()
   })
})