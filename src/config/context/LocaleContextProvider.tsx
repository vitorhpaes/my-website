import React, { createContext, useCallback, useContext } from 'react'
import { useIntl } from 'react-intl'

interface LocaleContextProps {
    translate: (key: string, values?: Object) => string
}

const LocaleContext = createContext({} as LocaleContextProps)

const LocaleContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const intl = useIntl()

    const translate = useCallback(
        (key: string, values?: any) => intl.formatMessage({ id: key }, values),
        [intl]
    )

    return (
        <LocaleContext.Provider value={{ translate }}>
            {children}
        </LocaleContext.Provider>
    )
}

export const useLocale = () => useContext(LocaleContext)

export default LocaleContextProvider
