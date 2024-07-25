import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import NewsCard from '../NewsCard.js/NewsCard';
import { getFrontPageNews } from '@/utils/getFrontPageNews';
import Image from 'next/image';

const LatestNews = async () => {

    const { data } = await getFrontPageNews();
    const latest = data[0];
    // console.log(latest);

    return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <Card>
                    <CardActionArea>
                        <CardMedia sx={{
                            '& img': {
                                height: '450px'
                            }
                        }}>
                            <Image
                                src={latest?.thumbnail_url}
                                width={800}
                                height={450}
                                alt='latest thambnel'
                            />
                        </CardMedia>

                        <CardContent>
                            <p className='bg-[#FF8C47] w-fit px-1 rounded-lg text-white'>
                                {latest?.category}
                            </p>
                            <Typography gutterBottom variant="h5" component="div">
                                {latest?.title.length > 50 ? latest?.title.slice(0, 30) + ` ...` : latest?.title}
                            </Typography>

                            <Typography variant="body1" color="text.primay">
                                Post by {latest?.author.name}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {latest?.details.length > 150 ? latest?.details.slice(0, 150) + ` ...` : latest?.details}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            {
                data.slice(1, 5).map(news => (
                    <Grid key={news._id} item xs={6}>
                        <NewsCard news={news} />
                    </Grid>
                ))
            }

        </Grid>
    );
};

export default LatestNews;