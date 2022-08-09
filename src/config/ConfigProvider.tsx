import React from 'react'
import TranslationsIntlContainer from './context/TranslationsIntlContainer'
import SystemThemeWrapper from './SystemThemeWrapper'

const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <TranslationsIntlContainer>
            <SystemThemeWrapper>{children}</SystemThemeWrapper>
        </TranslationsIntlContainer>
    )
}

export default ConfigProvider
