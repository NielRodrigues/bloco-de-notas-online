import React from 'react'
import PropTypes from 'prop-types'

import { Text } from './style'


function Title({text}) {
  return (
    <Text>{text}</Text>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
