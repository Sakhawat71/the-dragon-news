import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import newsImg from '@/assets/news.png';
import Image from 'next/image';

const NewsCard = () => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia>
                    <Image
                        src={newsImg}
                        width={800}
                        height={300}
                        alt='news thambnel'
                    />
                </CardMedia>

                <CardContent>
                    <p className='bg-[#FF8C47] w-fit px-1 rounded-lg text-white'>
                        Lizard
                    </p>
                    <Typography gutterBottom variant="h5" component="div">
                        Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                    </Typography>

                    <Typography variant="body1" color="text.primay">
                        Post by Author
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NewsCard;