// 'use client'
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import mainLogo from "@/assets/dragon-logo.png";
import { showCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {

    const currentDate = showCurrentDate()
    // console.log(curDate);

    return (
        <Box className="py-10 text-center">
            <Container className="w-full mx-auto space-y-2">
                <Image
                    className="mx-auto "
                    src={mainLogo}
                    width='400'
                    height="50"
                    alt="main_logo"
                />

                <Typography className="text-gray-400">
                    Journalism Without Fear or Favour
                </Typography>

                <Typography>
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;