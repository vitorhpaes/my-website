import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Content'
import Navbar from './Navbar'

const Layout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}

export default Layout
