
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';

const NewsCard = ({news}) => {


    return (
        <Card>
            <CardActionArea>
                <CardMedia sx={{
                    '& img' : {
                        height: '250px'
                    } 
                }}>
                    <Image
                        src={news?.thumbnail_url}
                        width={800}
                        height={200}
                        alt='news thambnel'
                    />
                </CardMedia>

                <CardContent>
                    <p className='bg-[#FF8C47] w-fit px-1 rounded-lg text-white'>
                        {news?.category}
                    </p>
                    <Typography gutterBottom variant="h5" component="div">
                        {news?.title.length > 50 ? news?.title.slice(0,30) + ` ...` : news?.title}
                    </Typography>

                    <Typography variant="body1" color="text.primay">
                        Post by {news?.author.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {news?.details.length > 150 ? news?.details.slice(0,150) + ` ...` : news?.details}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NewsCard;