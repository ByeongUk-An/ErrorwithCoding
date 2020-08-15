import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Errorbox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Text = styled.p`
  color: ${props => props.color}
`;

const Alert = ({text, color}) =>(
    <Errorbox>
        <Text color={color}>{text}</Text>
    </Errorbox>
)

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Alert;