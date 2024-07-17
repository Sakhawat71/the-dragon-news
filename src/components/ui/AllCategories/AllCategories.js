import getAllCategories from '@/utils/getAllCategories';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const AllCategories = async () => {

    const { data: allCategories } = await getAllCategories();
    // console.log(allCategories);



    return (
        <Box>

            <Typography sx={{ marginTop: 2 }}>
                Categories
            </Typography>

            <Divider />

            <Stack spacing={1} sx={{ marginTop: 5 }}>
                {
                    allCategories?.map(cat => (
                        <Button variant="outlined" key={cat._id}>
                            <Link href={`news?category=${cat.title.toLowerCase()}`} >{cat.title}</Link>
                        </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default AllCategories;