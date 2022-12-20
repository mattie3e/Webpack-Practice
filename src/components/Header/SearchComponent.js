import React from 'react'
import styled from 'styled-components'
import { FlexDiv, Input, Button, Img } from '../../styled/Styled'


const SearchBox = styled(FlexDiv)`
    max-width: 660px;

    @media (max-width: 720px){
        display: none;
    } 
`

const InputTag = styled(Input)`
    outline: none;

    &:focus{
        border: none;
    }
`

const KeyboardImg = styled(Img)`
    &:hover{
        filter: brightness(130%);
    }
`

const MicBtn = styled(Button)`
    &:hover{
        filter: brightness(200%);
    }
`


const SearchComponent = () => {
    const [ hiddenIcon, setHiddenIcon ] = React.useState(true)

    const inputFocusEvent = () => {
        hiddenIcon ? setHiddenIcon(false) : setHiddenIcon(true)
    }

    return(
        <SearchBox width='46%' align='row-vertical-center'>
            {
                // 기본
                hiddenIcon ? 
                <FlexDiv border='1px solid #313131' padding='0 6px' color='white' width='100%' height='38px' fontSize='16px' backgroundColor='#0F0F0F' borderRadius='40px 0 0 40px' margin='0 0 0 40px'>
                    <Img display='none' position='relative' right='22px' width='20px' src={require('../../img/search.svg').default}/>
                    <InputTag fontSize='16px' width='100%' height='36px' padding='0 6px' border='none' borderRadius='20px' color='white' backgroundColor='#0F0F0F'
                    onFocus={inputFocusEvent} onBlur={inputFocusEvent} placeholder='검색'/>
                </FlexDiv>
                :
                // 클릭했을 때
                <FlexDiv border='1px solid #1C62B9' padding='0 6px 0 40px' color='white' width='100%' height='38px' fontSize='16px' backgroundColor='#0F0F0F' borderRadius='40px 0 0 40px'>
                    <Img position='relative' right='24px' top='8px' width='20px' src={require('../../img/search.svg').default}/>
                    <InputTag fontSize='16px' width='100%' height='36px' padding='0 6px' borderRadius='20px' color='white' backgroundColor='#0F0F0F' 
                    position='relative' right='14px'
                    onFocus={inputFocusEvent} onBlur={inputFocusEvent} placeholder='검색'/>
                    <Button padding='0' position='relative' right='2px'>
                        <KeyboardImg width='18px' src={require('../../img/keyboard.png').default}/>
                    </Button>
                </FlexDiv>
            }

            <Button backgroundColor='#222222' width='80px' height='40px' border='1px solid #313131' borderRadius='0 40px 40px 0'>
                <Img width='24px' height='24px' margin='0 0 0 10px' src={require('../../img/search.svg').default}/>
            </Button>
            <MicBtn position='relative' right='-6px' width='50px' height='40px' backgroundColor='#181818' borderRadius='50%'>
                <Img position='relative' left='3px' width='22px' src={require('../../img/mic.png').default}/>
            </MicBtn>
        </SearchBox>
    )

}


export default SearchComponent