"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import logo from "@/assets/logo.svg";
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import { Facebook } from '@mui/icons-material';

const navItems = [
    {
        route: "Home",
        pathname: "/"
    },
    {
        route: "Pages",
        pathname: "/pages"
    },
    {
        route: "Category",
        pathname: "/category"
    },
    {
        route: "News",
        pathname: "/news"
    },
    {
        route: "About",
        pathname: "/about"
    },
    {
        route: "Contact",
        pathname: "/contact"
    },
]

const Navbar = () => {


    return (
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Image src={logo} width={150} height={100} alt='logo' />

                    <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={item.pathname}
                            >
                                <Button className='  text-white'>
                                    {item.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box>
                        <Stack direction="row" sx={{
                            "& Svg": {
                                color: "white"
                            }
                        }}>

                            <IconButton>
                                <Facebook></Facebook>
                            </IconButton>

                            <IconButton>
                                <Facebook></Facebook>
                            </IconButton>

                            <IconButton>
                                <Facebook></Facebook>
                            </IconButton>

                            <IconButton>
                                <Facebook></Facebook>
                            </IconButton>

                        </Stack>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
