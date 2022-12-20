import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsOpen } from '../../redux/action'
import { useRecoilValue, useRecoilState } from 'recoil'
import { isOpenState, subscriptionData } from '../../recoil/youtubeState'
import styled from 'styled-components'

import WideNavItemComponent from './WideNavItemComponent'
import WideNavSubscriptionComponent from './WideNavSubscriptionComponent'
import MenuAndLogoComponent from '../Header/MenuAndLogoComponent'
import { NavItem } from '../../styled/YoutubeStyle'
import { Div } from '../../styled/Styled'


const WideNav = styled(Div)` 
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 100;

    @media (max-width: 1312px){
        ${(props) => {
            const translate = props.translate ? props.translate : '0px'
    
            return `
                transform: translateX(${translate});
                transition: all 0.2s;
            `
        }}
    }

    ${(props) => {
        const translate = props.translate ? props.translate : '0px'
    
        return `
            transform: translateX(${translate});
        `
    }}
`

const BlackBox = styled(Div)`
    display: none;
    z-index: 1;
    opacity: 0.5;
    overflow: hidden;

    @media screen and (max-width: 1312px){
        ${(props) => {
            const display = props.display ? props.display : ''

            return `
                display: ${display};
            `
        }}
    }
`

const Divide = styled(Div)`
    border-top: 1px solid #272727;
`


const WideNavComponent = () =>{
    const navMenuArr1 = [{'src':'home.svg', 'name':'홈'}, {'src':'shorts.png', 'name':'Shorts'}, {'src':'subscriptions.svg', 'name':'구독'}, {'src':'originals.svg', 'name':'Originals'}, {'src':'youtube_music.png', 'name':'YouTube Music'}]

    const navMenuArr2 = [{'src':'video_library.svg', 'name':'보관함'}, {'src':'history.svg', 'name':'시청 기록'}, {'src':'my_video.svg', 'name':'내 동영상'}, {'src':'schedule.svg', 'name':'나중에 볼 동영상'}, {'src':'vertical_align_bottom.svg', 'name':'오프라인 저장 동영상'}, {'src':'thumb_up.svg', 'name':'좋아요 표시한 동영상'}, {'src':'expand_more.svg', 'name':'더보기'}]

    // 백엔드 가져오는 부분
    const subscriptions = useRecoilValue(subscriptionData)
    //const subscriptions = useSelector(state => state.subscribe)
    // const { isOpen, selectedNav, setSelectedNav } = props
    
    //const dispatch = useDispatch()

    //const isOpen = useSelector(state => state.isOpen)
    //const setIsOpen = () => dispatch(changeIsOpen())
    const [ isOpen, setIsOpen ] = useRecoilState(isOpenState)

    const menuClickEvent = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        console.log(isOpen)
    } 

    return(
        <React.Fragment>
            <WideNav position='fixed' boxSizing='border-box' backgroundColor='#0F0F0F' width='240px' height='100vh' padding='0 0 12px 0' translate={isOpen ? '-240px' : '0px'}>
                <MenuAndLogoComponent location='wideNav'/>
                {
                    navMenuArr1.map((element, index) => {
                    return <WideNavItemComponent key={index} data={element}/>
                    })
                }
                <Divide width='100%' height='1px' margin='12px 8px 12px 12px' backgroundColor='#1B1B1B' pointerEvents='none'></Divide>
                {
                    navMenuArr2.map((element, index) => {
                        return <WideNavItemComponent key={index} data={element}/>
                    })
                }
                <Divide width='100%' height='1px' margin='12px 8px 12px 12px' backgroundColor='#1B1B1B' pointerEvents='none'></Divide>
                <NavItem margin='16px 0 4px 12px'>
                    구독
                </NavItem>
                {
                    subscriptions.map((element, index) => {
                        return <WideNavSubscriptionComponent key={index} data={element}/>
                    })
                }
            </WideNav>
            <BlackBox position='fixed' width='100%' height='100vh' backgroundColor='black' display={isOpen ? 'none' : 'block'} onClick={menuClickEvent}></BlackBox>
        </React.Fragment>
    )

}


export default WideNavComponent