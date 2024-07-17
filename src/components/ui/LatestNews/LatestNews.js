import { Grid } from '@mui/material';
import React from 'react';
import NewsCard from '../NewsCard.js/NewsCard';

const LatestNews = () => {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <NewsCard />
            </Grid>
            <Grid item xs={6}>
                <NewsCard />
            </Grid>
            <Grid item xs={6}>
                <NewsCard />
            </Grid>
            <Grid item xs={6}>
                <NewsCard />
            </Grid>
            <Grid item xs={6}>
                <NewsCard />
            </Grid>
        </Grid>
    );
};

export default LatestNews;