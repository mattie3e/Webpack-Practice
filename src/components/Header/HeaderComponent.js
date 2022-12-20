import React from 'react'
import styled from 'styled-components'

import MenuAndLogoComponent from './MenuAndLogoComponent'
import SearchComponent from './SearchComponent'
import UserComponent from './UserComponent'
import { Header } from '../../styled/Styled'


const HeaderStyle = styled(Header)`
    z-index: 5;
`


const HeaderComponent = () => {
    return (
        <HeaderStyle display='flex' align='row-vertical-center' position='fixed' boxSizing='border-box' padding='0 16px 0 0' width='100%' height='56px' backgroundColor='#0F0F0F' justifyContent='space-between'>
            <MenuAndLogoComponent location='Header'/>
            <SearchComponent/>
            <UserComponent/>
        </HeaderStyle>
    )
}


export default HeaderComponent