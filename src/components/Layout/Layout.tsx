import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Content'
import DeveloperContent from './DeveloperContent'

const Layout: React.FC = () => {
    return (
        <>
            <DeveloperContent />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}

export default Layout
