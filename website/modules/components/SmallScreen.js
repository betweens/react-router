import React from 'react'
import Media from 'react-media'
import { SMALL_SCREEN } from '../Theme'

console.log(SMALL_SCREEN);
const SmallScreen = ({ children }) => (
  <Media query={SMALL_SCREEN} children={children}/>
)

export default SmallScreen
