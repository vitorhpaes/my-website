import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Content'
import SettingsHeader from './SettingsHeader'
import TechCard from './TechCard'

const PersonalPageLayout: React.FC = () => {
    return (
        <>
            <SettingsHeader />
            <TechCard />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}

export default PersonalPageLayout
