import React from 'react'
import VideoElementComponent from './VideoElementComponent'
import ContentInfoComponent from './ContentInfoComponent'

import styled from 'styled-components'
import { FlexDiv } from '../../../styled/Styled'
import { YoutubeIcon } from '../../../styled/YoutubeStyle'
import useVideoPreview from '../../../hooks/useVideoPreview'


const Content = styled(FlexDiv)`
    flex-flow: column wrap;
    flex: 1 1 20%;
    color: white;
    min-width: 240px;
    max-width: 360px;
`

const ExpandContent = styled(FlexDiv)`
    z-index: 3;

    @media screen and (min-width: 1800px){
        width: 440px;
    }
`


const ContentComponent = (props) => {
    const { element } = props

    const [resizeState, setResizeState] = React.useState(false)

    const mouseClickEvent = () => {
        resizeState ? setResizeState(false) : setResizeState(true)
    }

    const [smallMenu, setSmallMenu] = useVideoPreview()


    return (
        <React.Fragment>
        {
            resizeState == false && 
            <Content cursor='pointer' position='relative' font-size='14px' margin='0 8px 40px 8px'
            onMouseOver={setSmallMenu} onMouseOut={setSmallMenu}>
                <VideoElementComponent data={element} clickEvent={mouseClickEvent}/> 
                <ContentInfoComponent data={element} smallMenu={smallMenu}/>
            </Content>
            ||
            resizeState == true && 
            <Content>
                <ExpandContent flexDirection='column' position='absolute' width='360px' backgroundColor='#202020' borderRadius='10px' onClick={mouseClickEvent}>
                    <VideoElementComponent data={element} resizePadding='10px 10px 0 0'/> 
                    <ContentInfoComponent data={element} smallMenu={smallMenu}/>
                    <FlexDiv padding='10px 10px 0 10px' boxSizing='border-box' flexDirection='column'>
                        <FlexDiv align='row-center' backgroundColor='#373737' width='100%' padding='6px 10px' borderRadius='30px' margin='0 0 10px 0' boxSizing='border-box' color='white' fontSize='14px'>
                            <YoutubeIcon width='24px' margin='0 6px 0 0' src={require('../../../img/schedule.svg').default}/>
                            나중에 볼 동영상
                        </FlexDiv>
                        <FlexDiv align='row-center' backgroundColor='#373737' width='100%' padding='6px 10px' borderRadius='30px' margin='0 0 10px 0' boxSizing='border-box' color='white' fontSize='14px'>
                            <YoutubeIcon width='24px' margin='0 6px 0 0' src={require('../../../img/add_playlist.svg').default}/>
                            현재 재생목록에 추가
                        </FlexDiv>
                    </FlexDiv>
                </ExpandContent>
            </Content> 
        }
        </React.Fragment>
    )
}


export default ContentComponent