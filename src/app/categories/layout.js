import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = () => {



    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        router
                    </Grid>
                    <Grid item xs={9}>
                        news
                    </Grid>
                    
                </Grid>
            </Container>
        </Box>
    );
};

export default CategoriesLayout;