import { createSiteTheme } from '@app/assets/theme/theme'
import { useAppSelector } from '@app/state/hooks'
import { ThemeProvider } from '@mui/material'
import React, { useMemo } from 'react'

const SystemThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { themeMode } = useAppSelector((app) => app.settings)
    const theme = useMemo(() => createSiteTheme(themeMode), [themeMode])

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default SystemThemeWrapper
