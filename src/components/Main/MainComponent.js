import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useRecoilValue } from 'recoil'

import ContentComponent from './Home/ContentComponent'
import TempComponent from './TempComponent'
import { isOpenState, selectNavState } from '../../recoil/youtubeState'


const Main = styled.main`
    padding-top: 56px;
    @media screen and (min-width: 1313px){
        ${(props) => {
            const paddingLeft = props.paddingLeft ? props.paddingLeft : '240px'

            return `
                padding-left: ${paddingLeft};
            `
        }}
    }

    @media screen and (max-width: 1312px){
        padding-left: 72px;
    }

    @media screen and (max-width: 800px){
        padding-left: 0px;
    }
`

const MainComponent = () => {
    //const isOpen = useSelector(state => state.isOpen)
    //const selectNav = useSelector(state => state.selectNav)
    
    const isOpen = useRecoilValue(isOpenState)
    const selectNav = useRecoilValue(selectNavState)

    return(
        <React.Fragment>
        {
            isOpen ?
            <Main paddingLeft='72px'>
                {
                    selectNav == '홈' && <ContentComponent/>  || 
                    selectNav != '홈' && <TempComponent text={selectNav}/> 
                }    
            </Main>
            :
            <Main>
            {
                selectNav == '홈' && <ContentComponent/>  || 
                selectNav != '홈' && <TempComponent text={selectNav}/> 
            }    
        </Main>
        }
        </React.Fragment>
    )

}

export default MainComponent