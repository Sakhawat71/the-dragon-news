"use client"
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Typography, } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Footer = () => {

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


    return (
        <Box className="bg-[#001321] py-10">
            <Container className='space-y-3'>

                <Box className="w-full text-center space-x-2" direction="row" sx={{
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
                </Box>

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

                <Typography className='text-center text-gray-600'>
                    @2024 The Dragon News. Built with Next.js .
                </Typography>

            </Container>
        </Box>
    );
};

export default Footer;