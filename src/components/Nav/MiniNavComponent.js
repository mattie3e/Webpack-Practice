import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSetRecoilState } from 'recoil'

import { changeNav } from '../../redux/action'
import { selectNavState } from '../../recoil/youtubeState'
import { YoutubeIcon } from '../../styled/YoutubeStyle'
import { Div, FlexDiv } from '../../styled/Styled'

const MiniNav = styled(Div)`
    box-sizing: border-box;
    position: fixed;

    @media (max-width: 800px){
        display: none;
    }
`

const MiniNavItem = styled(FlexDiv)`
    &:hover{
        background-color: #272727;
    }
`

const IconName = styled(Div)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    pointer-events: none;
`

const MiniNavComponent = () =>{
    const navMenuArr = [{'src':'home.svg', 'name':'홈'}, {'src':'shorts.png', 'name':'Shorts'}, {'src':'subscriptions.svg', 'name':'구독'}, {'src':'originals.svg', 'name':'Originals'}, {'src':'youtube_music.png', 'name':'YouTube Music'}, {'src':'video_library.svg', 'name':'보관함'}, {'src':'vertical_align_bottom.svg', 'name':'오프라인 저장 동영상'}]

    //const dispatch = useDispatch()
    const setSelectNav = useSetRecoilState(selectNavState)


    const clickNavEvent = (e) => {
        const target = e.target
        if (target.id == 'navItem'){
            const value = target.children[1].innerHTML

            setSelectNav(value)
        }
    }

    return(
        <MiniNav backgroundColor='#0F0F0F' width='72px' height='100vh' padding='60px 4px 0 4px'>
            {
                navMenuArr.map((element, index) => {
                    return(
                        <React.Fragment>
                            <MiniNavItem id='navItem' align='column-center' padding='16px 0 14px 0' margin='0px' fontSize='10px' borderRadius='10px'
                            key={index} onClick={clickNavEvent}>
                                <YoutubeIcon width='24px' margin='0 0 6px' src={require('../../img/' + element.src).default}/>
                                <IconName fontSize='10px' width='100%' color='white'>{element.name}</IconName>
                            </MiniNavItem>
                        </React.Fragment>
                    )
                })
            }
        </MiniNav>
    )
}


export default MiniNavComponent