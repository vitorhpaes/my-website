import React from 'react'
import { Grid, Link, styled, Typography } from '@mui/material'
import SocialMedia from '../SocialMedia/SocialMedia'
import { rgba } from 'polished'

const StyledNavbar = styled(Grid)`
    box-shadow: ${({ theme }) => theme.shadows['5']};
    background-color: ${({ theme }) => rgba(theme.palette.grey[800], 0.7)};
    width: 100vw;
    height: ${({ theme }) => theme.size.largeXX}px;
    position: fixed;
    top: 0;
    left: 0;
`

const StyledMenuLink = styled(Link)`
    padding: ${({ theme }) => theme.spacing(2)};
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
    cursor: pointer;
`

const StyledDeveloperName = styled('h1')`
    font-family: 'Lavishly Yours';
    color: ${({ theme }) =>
        theme.palette.getContrastText(theme.palette.grey[800])};
    font-size: 45px;
    font-weight: 400;
    line-height: 0;
`

const Navbar: React.FC = () => {
    return (
        <StyledNavbar alignItems="center" justifyContent="center" container>
            <Grid item md={2} textAlign="center">
                <StyledDeveloperName>Vítor Paes</StyledDeveloperName>
            </Grid>
            <Grid container item md={7} justifyContent="center">
                <StyledMenuLink>
                    <Typography variant="subtitle1">Home</Typography>
                </StyledMenuLink>
                <StyledMenuLink>
                    <Typography variant="subtitle1">Skills</Typography>
                </StyledMenuLink>
                <StyledMenuLink>
                    <Typography variant="subtitle1">Curriculum</Typography>
                </StyledMenuLink>
                <StyledMenuLink>
                    <Typography variant="subtitle1">About</Typography>
                </StyledMenuLink>
                <StyledMenuLink>
                    <Typography variant="subtitle1">Contact</Typography>
                </StyledMenuLink>
            </Grid>
            <Grid container item md={3} justifyContent="end">
                <SocialMedia
                    twitter="https://twitter.com/vitor__paes"
                    instagram="https://www.instagram.com/vitorhpaes"
                    linkedin="https://www.linkedin.com/in/vitor-paes-2880541b2"
                    github="https://github.com/vitorhpaes"
                />
            </Grid>
        </StyledNavbar>
    )
}

export default Navbar
