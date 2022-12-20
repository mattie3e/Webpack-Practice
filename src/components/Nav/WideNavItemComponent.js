import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useRecoilState } from 'recoil'

import { changeNav } from '../../redux/action'
import { selectNavState } from '../../recoil/youtubeState'
import { NavItem, YoutubeIcon, WideNavText } from '../../styled/YoutubeStyle'


const WideNavItemComponent = (props) => {
    const { data } = props
    const { src, name } = data 

    //const dispatch = useDispatch()
    
    //const selectedNav = useSelector(state => state.selectNav)
    const [ selectedNav, setSelectedNav ] = useRecoilState(selectNavState)

    const clickNavEvent = (e) => {
        const target = e.target

        if (target.id == 'navItem'){
            const value = target.children[1].innerHTML

            setSelectedNav(value)
            //dispatch(changeNav(value))
        }
    }

    return(
        <React.Fragment>
        {
            name == selectedNav && 
            <NavItem backgroundColor='#272727' id='navItem'>
                <YoutubeIcon src={require('../../img/'+src).default}/>
                <WideNavText>
                    {name}
                </WideNavText>
            </NavItem> ||
            name != selectedNav && 
            <NavItem onClick={clickNavEvent} id='navItem'>
                <YoutubeIcon src={require('../../img/'+src).default}/>
                <WideNavText>
                    {name}
                </WideNavText>
            </NavItem>
        }
        </React.Fragment>
    )   
}


export default WideNavItemComponent