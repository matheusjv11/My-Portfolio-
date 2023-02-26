import { MobileHeaderWrapper } from "@/styles/mobileHeader";
import { useState } from 'react'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileHeader () {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
   
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
   
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <MobileHeaderWrapper>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon fontSize="large"/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <a href="#initialPage">Home</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="#about">About me</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="#projects">Projects</a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <a href="#contact">Contact</a>
                </MenuItem>
            </Menu>
        </MobileHeaderWrapper>
    )
}