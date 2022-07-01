import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Content'
import SideMenu from './SideMenu'

const Layout: React.FC = () => {
    return (
        <>
            <SideMenu />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}

export default Layout
