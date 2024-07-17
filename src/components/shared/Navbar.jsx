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
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import Header from './Header';

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
        pathname: "/categories"
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
        <>
            <Header />

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
                                    <Facebook />
                                </IconButton>

                                <IconButton>
                                    <Twitter />
                                </IconButton>

                                <IconButton>
                                    <Instagram />
                                </IconButton>

                                <IconButton>
                                    < YouTube />
                                </IconButton>

                            </Stack>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;
