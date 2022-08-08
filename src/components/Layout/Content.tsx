import React from 'react'
import { styled } from '@mui/material'
import Spacing from '@ds/Spacing/Spacing'

const StyledContent = styled('div')`
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
`

interface PageContentProps {
    children: React.ReactNode
}

const Content: React.FC<PageContentProps> = ({ children }) => {
    return (
        <Spacing mt="largeXXX" px="medium">
            <StyledContent>{children}</StyledContent>
        </Spacing>
    )
}

export default Content
