import React from 'react'
import { Divider, styled, Typography } from '@mui/material'
import { Card, Spacing } from '@ds'

import {
    SiRedux,
    SiReact,
    SiTypescript,
    SiWebpack,
    SiBabel,
    SiEslint,
    SiPrettier,
    SiJest,
    SiGithub,
    SiMaterialui,
    SiStyledcomponents,
    SiStorybook,
} from 'react-icons/si'
import { useLocale } from '@app/config/context/LocaleContextProvider'
import { borderRadius } from 'polished'
import { isMobile } from '@app/drivers/device'

const StyledTechCard = styled(Card)`
    z-index: 9999;
    position: fixed;
    bottom: 0;
    right: ${({ theme }) => theme.size.largeX}px;
    ${({ theme }) => borderRadius('top', theme.size.small)};
    ${({ theme }) => borderRadius('bottom', theme.size.none)};

    > * {
        display: flex;
        align-items: space-between;
        justify-content: center;
    }
`

const TechCard: React.FC = () => {
    const { translate } = useLocale()
    return (
        <StyledTechCard>
            <Spacing px="medium" py="small">
                <Typography variant="body2">{translate('madeWith')}</Typography>
                <Spacing ml="small">
                    <SiReact size={20} />
                </Spacing>
                <Spacing ml="small">
                    <SiTypescript size={20} />
                </Spacing>
                <Spacing ml="small">
                    <SiRedux size={20} />
                </Spacing>
                <Spacing ml="small">
                    <SiMaterialui size={20} />
                </Spacing>
                <Spacing ml="small">
                    <SiStyledcomponents size={25} />
                </Spacing>
                <Spacing mx="small">
                    <SiStorybook size={20} />
                </Spacing>
                <Divider style={{ borderLeftWidth: 'thin' }} />
                <Spacing ml="small">
                    <SiWebpack size={20} />
                </Spacing>
                <Spacing mx="small">
                    <SiBabel size={20} />
                </Spacing>
                <Divider style={{ borderLeftWidth: 'thin' }} />
                <Spacing ml="small">
                    <SiJest size={20} />
                </Spacing>
                <Spacing ml="small">
                    <SiEslint size={20} />
                </Spacing>
                <Spacing mx="small">
                    <SiPrettier size={20} />
                </Spacing>
                <Divider style={{ borderLeftWidth: 'thin' }} />
                <Spacing ml="small">
                    <SiGithub size={20} />
                </Spacing>
            </Spacing>
        </StyledTechCard>
    )
}

const TechCardWrapper: React.FC = () => {
    if (isMobile) return <></>
    return <TechCard />
}

export default TechCardWrapper
