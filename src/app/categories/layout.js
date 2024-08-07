import AllCategories from '@/components/ui/AllCategories/AllCategories';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({children}) => {



    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    
                    <Grid item xs={3}>
                        <AllCategories />
                    </Grid>
                    <Grid item xs={9} >
                        {children}
                    </Grid>
                    
                </Grid>
            </Container>
        </Box>
    );
};

export default CategoriesLayout;