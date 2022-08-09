import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Content'
import DeveloperContent from './DeveloperContent'
import SettingsHeader from './SettingsHeader'
import TechCard from './TechCard'

const Layout: React.FC = () => {
    return (
        <>
            <SettingsHeader />
            <DeveloperContent />
            <TechCard />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}

export default Layout
