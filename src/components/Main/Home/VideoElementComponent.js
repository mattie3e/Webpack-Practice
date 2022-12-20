import React from 'react'
import styled from 'styled-components'

import useVideoPreview from '../../../hooks/useVideoPreview'
import { Div, Img } from '../../../styled/Styled'


const Duration = styled(Div)`
    ${(props) => {
        const hover = props.hover

        if (hover) {
        return `
            font-weight: 400;
            padding: 6px;
        `
        }
    }}
`


const VideoElementComponent = (props) => {
    // 렌더링 자주 일어남
    const { data, clickEvent, resizePadding } = props
    const { thumbnail_img, duration } = data

    const [eachDuration, setDuration] = useVideoPreview()

    return (
        <Div position='relative' width='100%' padding='0 0 56.25% 0'>
            {
                resizePadding ?
                <Img position='absolute' width='100%' borderRadius={resizePadding} src={thumbnail_img} onMouseOver={setDuration} onMouseOut={setDuration} onClick={clickEvent}/>
                :
                <Img position='absolute' width='100%' borderRadius='10px' src={thumbnail_img} onMouseOver={setDuration} onMouseOut={setDuration} onClick={clickEvent}/>
            }
            <Div right='0px' bottom='0px' display='inline-block' position='absolute' backgroundColor='rgb(0 0 0 / 80%)' margin='4px' padding='1px 4px' borderRadius='4px'>
                {
                    eachDuration ?
                    <Duration position='relative' top='-1px' fontWeight='600' fontSize='0.8rem' color='white'>{duration}</Duration>
                    :
                    <Duration position='relative' top='-1px' fontWeight='600' fontSize='0.8rem' color='white' hover='true'>
                        계속 마우스 오버하여 재생하기
                    </Duration>
                }
            </Div>
        </Div>
    )
}


export default VideoElementComponent