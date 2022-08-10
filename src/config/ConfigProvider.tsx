import React from 'react'

import TranslationsIntlContainer from './TranslationsIntlContainer'
import SystemThemeWrapper from './SystemThemeContainer'
import LocaleContextProvider from './context/LocaleContextProvider'

const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <SystemThemeWrapper>
            <TranslationsIntlContainer>
                <LocaleContextProvider>{children}</LocaleContextProvider>
            </TranslationsIntlContainer>
        </SystemThemeWrapper>
    )
}

export default ConfigProvider
