import React from 'react'
import PropTypes from 'prop-types'
import Media from 'react-media'
 
import Loading from './Loading'

const Test = ({ example }) => {
  return (<Media query="(max-width: 599px)">
          {matches => matches ? (
            <p>The document is less than 600px wide.</p>
          ) : (
            <p>The document is at least 600px wide.</p>
          )}
        </Media>)
}

Test.propTypes = {
  example: PropTypes.object
}

export default Test
