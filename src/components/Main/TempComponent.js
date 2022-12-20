import React from 'react'
import styled from 'styled-components'

import { Div } from '../../styled/Styled'

const TempComponent = (props) => {
    const { text } = props
    
    return (
        <Div color='white'>
            {text}
        </Div>
    )
}


export default TempComponent