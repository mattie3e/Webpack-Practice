import React from 'react'
import styled from 'styled-components'
import { NavItem, WideNavText } from '../../styled/YoutubeStyle'
import { Img } from '../../styled/Styled'


const WideNavSubscriptionComponent = (props) => {
    const {data} = props
    const { src, name } = data

    return (
        <NavItem>
            <Img borderRadius='50%' width='24px' src={src}/>
            <WideNavText>{name}</WideNavText>
        </NavItem>
    )

}


export default WideNavSubscriptionComponent