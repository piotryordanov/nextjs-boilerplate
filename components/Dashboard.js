import React from 'react'
import {Flex, Box} from 'rebass'
import PropTypes from 'prop-types'

const Index = props => (
	<Flex>
		<Box m={20}>{props.title}</Box>
	</Flex>
)

Index.propTypes = {
	title: PropTypes.string
}
Index.defaultProps = {
	title: ''
}

export default Index
