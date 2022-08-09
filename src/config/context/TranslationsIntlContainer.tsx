import React, { useMemo } from 'react'
import { useAppSelector } from '@app/state/hooks'
import getIntlConfiguration from '@app/drivers/locale'
import { IntlProvider } from 'react-intl'

interface TranslationsIntlContainerProps {
    children: React.ReactNode
}

const TranslationsIntlContainer: React.FC<TranslationsIntlContainerProps> = ({
    children,
}) => {
    const { language: currentLanguage } = useAppSelector((app) => app.settings)

    const { language, messages } = useMemo(
        () => getIntlConfiguration(currentLanguage),
        []
    )

    return (
        <IntlProvider locale={language} messages={messages}>
            {children}
        </IntlProvider>
    )
}

export default TranslationsIntlContainer
