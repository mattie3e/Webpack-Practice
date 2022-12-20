import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux' // state 가져오는 명령어
import { useSetRecoilState } from 'recoil'

import { changeIsOpen } from "../../redux/action"
import { isOpenState } from '../../recoil/youtubeState'
import { Button, Div, Span, FlexDiv, Img } from '../../styled/Styled'


const MenuBtn = styled(Button)`
    transition: all 0.3s ease-out;

    &:active{  
        background-color: #373737;
    }
`


const MenuAndLogoComponent = (props) => {
    //const dispatch = useDispatch()
    //const menuClickEvent = () => dispatch(changeIsOpen())

    const { location } = props
    const setIsOpen = useSetRecoilState(isOpenState)
    
    const menuClickEvent = () => {
        console.log(location)
        if (location == 'Header'){
            setIsOpen(false)  
        }
        else if (location == 'wideNav'){
            setIsOpen(true)
        }
    } 

    const logoClickEvent = () =>{
        document.location.reload()
    }


    return(
        <React.Fragment>
            <FlexDiv>
                <Div width='40px' padding='0 0 0 16px'>
                    <MenuBtn margin='10px 0 0 0' borderRadius='50%' width='40px' height='40px' onClick={menuClickEvent}>
                        <Img position='relative' top='-2px' right='-4px' width='18px' height='20px' src={require('../../img/menu.png').default}/> 
                    </MenuBtn>
                </Div>
                <Div box-sizing='border-box' position='relative' bottom='-2px' hoverCursot='pointer' padding='16px 14px 18px 16px'>
                    <Img width='97px' src={require('../../img/YouTube_logo.png').default} onClick={logoClickEvent}/>
                    <Span position='relative' bottom='30px' right='-97px' color='#aaa' fontSize='10px'>
                        KR
                    </Span>
                </Div>
            </FlexDiv>
        </React.Fragment>
    )

}


export default MenuAndLogoComponent