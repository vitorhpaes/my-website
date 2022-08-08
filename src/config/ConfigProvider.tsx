import React from 'react'
import SystemLocaleProvider from './context/SystemLocaleProvider'
import SystemThemeWrapper from './SystemThemeWrapper'

const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <SystemLocaleProvider>
            <SystemThemeWrapper>{children}</SystemThemeWrapper>
        </SystemLocaleProvider>
    )
}

export default ConfigProvider
