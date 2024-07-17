
import LatestNews from '@/components/ui/LatestNews/LatestNews';
import NewsCard from '@/components/ui/NewsCard.js/NewsCard';
import { Grid } from '@mui/material';
import React from 'react';


const HomePage = () => {

    return (
        <div className='my-10'>
            <Grid container spacing={3} >

                <Grid item xs={8} >
                    {/* <NewsCard /> */}
                    <LatestNews />
                </Grid>

                <Grid item xs={4} >
                    <NewsCard />
                </Grid>

            </Grid>
        </div>
    );
};

export default HomePage;