import styled from 'styled-components'
import { FlexDiv, Img, Div } from './Styled'


export const NavItem = styled(FlexDiv)`
    cursor: pointer;
    justify-content: left;
    align-items: center;
    text-align: left;
    color: white;
    margin: 0 8px 0 12px;
    padding: 0 12px;
    border-radius: 10px;

    &:hover{
        background-color: #272727;
    }
`

export const WideNavText = styled(Div)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    height: 40px;
    padding: 10px 0 0 24px;
    color: white;
    margin: 0px;
    font-size: 14px;
    font-weight: 400;
    pointer-events: none;
`

export const YoutubeIcon = styled(Img)`
    filter: brightness(0) invert(1);
    pointer-events: none;
`