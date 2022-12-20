import React from 'react'
import styled from 'styled-components'
import { Button, FlexDiv, Img } from '../../styled/Styled'

const UserComponent = () => {

    return(
        <FlexDiv align='row-vertical-center'>
            <Button padding='0 22px'>
                <Img width='20px' height='20px' src={require('../../img/add-video.png').default}/>
            </Button>
            <Button padding='0 20px 0 0'>
                <Img width='22px' height='22px' src={require('../../img/bell.png').default}/>
            </Button>
            <Button margin='0 6px 0 0'>
                <Img width='32px' height='32px' borderRadius='50%' src={'https://yt3.ggpht.com/yti/AJo0G0lvgY2OzTpHDZky-2wqGswsqJtGjuenkKGBPT9wYw=s88-c-k-c0x00ffffff-no-rj-mo'}/>
            </Button>
        </FlexDiv>
    )

}



export default UserComponent