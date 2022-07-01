import { styled } from '@mui/material'
import React from 'react'

const StyledContent = styled('div')`
    overflow: auto;
    background-color: ${({ theme }) => theme.palette.background.default};
    width: 100%;
    height: 100%;
    padding-top: ${({ theme }) => theme.spacing(3)};
    padding-bottom: ${({ theme }) => theme.spacing(3)};
    padding-right: ${({ theme }) => theme.spacing(3)};
    padding-left: ${({ theme }) => theme.spacing(18)};
`

interface PageContentProps {
    children: React.ReactNode
}

const Content: React.FC<PageContentProps> = ({ children }) => {
    return <StyledContent>{children}</StyledContent>
}

export default Content
