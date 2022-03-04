import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
    } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to= 'story' onClick={toggle}>
                        Story
                    </SidebarLink>
                    <SidebarLink to= 'roadmap' onClick={toggle}>
                        Roadmap
                    </SidebarLink>
                    <SidebarLink to= 'team' onClick={toggle}>
                        Team
                    </SidebarLink>
                    <SidebarLink to= 'faq' onClick={toggle}>
                        FAQ
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/wallet' onClick={toggle}>
                        Connect Wallet
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar