
import LatestNews from '@/components/ui/LatestNews/LatestNews';
import NewsCard from '@/components/ui/NewsCard.js/NewsCard';
import { getFrontPageNews } from '@/utils/getFrontPageNews';
import { Grid } from '@mui/material';
import React from 'react';


const HomePage = async () => {

    const {data} = await getFrontPageNews();
    const col = data[6];

    return (
        <div className='my-10'>
            <Grid container spacing={3} >

                <Grid item xs={8} >
                    <LatestNews />
                </Grid>

                <Grid item xs={4} >
                    <NewsCard news={col}/>
                </Grid>

            </Grid>
        </div>
    );
};

export default HomePage;