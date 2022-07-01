import React from 'react'
import { Link, styled, Typography, useTheme } from '@mui/material'
import Logo from '@app/assets/images/logo.png'
import SocialMedia from './../SocialMedia/SocialMedia'

const StyledSideMenu = styled('div')`
    background-color: ${({ theme }) => theme.palette.grey[900]};
    width: ${({ theme }) => theme.spacing(15)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`

const StyledMenuHeader = styled('div')`
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.palette.background.default};
    img {
        width: 100%;
        height: auto;
    }
`

const StyledMenuFooter = styled('div')`
    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    padding-left: ${({ theme }) => theme.spacing(1)};
    padding-right: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    background-color: ${({ theme }) => theme.palette.background.default};
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
`

const StyledMenuItems = styled('div')`
    display: flex;
    flex-direction: column;
`

const StyledMenuLink = styled(Link)`
    padding: ${({ theme }) => theme.spacing(2)};
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`

const SideMenu: React.FC = () => {
    return (
        <StyledSideMenu>
            <StyledMenuHeader>
                <img src={Logo} alt="Logo" />
            </StyledMenuHeader>
            <StyledMenuItems>
                <StyledMenuLink>
                    <Typography variant="body1">Home</Typography>
                </StyledMenuLink>
                <StyledMenuLink>
                    <Typography variant="body1">Skills</Typography>
                </StyledMenuLink>
                <StyledMenuLink>
                    <Typography variant="body1">Curriculum</Typography>
                </StyledMenuLink>
                <StyledMenuLink>
                    <Typography variant="body1">About</Typography>
                </StyledMenuLink>
                <StyledMenuLink>
                    <Typography variant="body1">Contact</Typography>
                </StyledMenuLink>
            </StyledMenuItems>
            <StyledMenuFooter className="footer">
                <SocialMedia />
            </StyledMenuFooter>
        </StyledSideMenu>
    )
}

export default SideMenu
