import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useRecoilValue } from 'recoil'

import EachContent from './EachContent'
import { contentData } from '../../../recoil/youtubeState'
import { FlexDiv } from '../../../styled/Styled'


const ContentComponent = () => {
    // 백엔드에서 불러올 데이터 -> state에 넣어주기
    //const contentData = useSelector(state => state.contents)

    const contents = useRecoilValue(contentData)

    return (
        <FlexDiv align='row-center' FlexWrap='wrap' margin='24px 20px 0 20px'>
            {
                contents.map((element) =>{
                    return(
                        <EachContent element={element}/>
                    )
                })
            }
        </FlexDiv>
    )
}


export default ContentComponent