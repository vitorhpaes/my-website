import { useAppSelector } from '@app/state/hooks'
import React, { createContext, useCallback, useMemo } from 'react'
import SystemThemeWrapper from '../SystemThemeWrapper'

interface LocaleContextProps {
    translate: (key: string, values: Object) => string
    currentLanguage: string
}

const LocaleContext = createContext({} as LocaleContextProps)

const SystemLocaleProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { language: currentLanguage } = useAppSelector(app => app.settings)
    const translate = useCallback((key: string, values: Object) => {
        return ''
    }, [])

    const memoizedValue = useMemo(
        () => ({
            translate,
            currentLanguage,
        }),
        []
    )

    return (
        <LocaleContext.Provider value={{ ...memoizedValue }}>
            {children}
        </LocaleContext.Provider>
    )
}

export default SystemLocaleProvider